import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface BankAccount {
  id: string;
  name: string;
  type: 'Checking' | 'Savings' | 'Treasury';
  accountNumberMasked: string;
  routingNumber: string;
  apy: number;
  balance: number;
  pending: number;
}

export interface BankTransaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  accountId: string;
  type: 'credit' | 'debit';
  status: 'Posted' | 'Pending';
  amount: number;
  reference: string;
}

export type CardFinish = 'titanium' | 'oceanic' | 'crimson';

export interface MetalCard {
  id: string;
  name: string;
  finish: CardFinish;
  holder: string;
  last4: string;
  fullNumber: string;
  expiry: string;
  cvv: string;
  network: 'Visa Infinite' | 'Mastercard World Elite';
  frozen: boolean;
  contactless: boolean;
  international: boolean;
  dailyLimit: number;
  monthlySpend: number;
}

export interface SavingsVault {
  id: string;
  name: string;
  saved: number;
  target: number;
  apy: number;
}

export interface ClientProfile {
  name: string;
  email: string;
  tier: string;
  memberSince: string;
}

interface PersistedBankingState {
  isAuthenticated: boolean;
  profile: ClientProfile;
  accounts: BankAccount[];
  transactions: BankTransaction[];
  cards: MetalCard[];
  vaults: SavingsVault[];
  alertsEnabled: {
    largeTransfers: boolean;
    cardInternational: boolean;
    monthlyStatement: boolean;
  };
}

interface BankingContextValue extends PersistedBankingState {
  signIn: (email?: string) => void;
  signOut: () => void;
  executeTransfer: (params: {
    fromAccountId: string;
    toAccountId?: string;
    externalRecipient?: string;
    amount: number;
    memo: string;
    mode: 'internal' | 'wire' | 'bill';
  }) => { ok: boolean; error?: string };
  toggleCardSetting: (cardId: string, key: 'frozen' | 'contactless' | 'international') => void;
  updateCardLimit: (cardId: string, limit: number) => void;
  fundVault: (vaultId: string, amount: number) => { ok: boolean };
  createVault: (name: string, target: number) => void;
  toggleAlert: (key: 'largeTransfers' | 'cardInternational' | 'monthlyStatement') => void;
  resetDemoData: () => void;
  exportTransactionsCsv: (rows: BankTransaction[]) => void;
}

const STORAGE_KEY = 'blueocean_banking_portal_v1';

const INITIAL_STATE: PersistedBankingState = {
  isAuthenticated: false,
  profile: {
    name: 'Alexandra Mercer',
    email: 'alex.mercer@blueocean.bank',
    tier: 'BlueOcean Private Reserve',
    memberSince: '2023',
  },
  accounts: [
    {
      id: 'acc-checking',
      name: 'Premier Checking',
      type: 'Checking',
      accountNumberMasked: '•••• 4821',
      routingNumber: '021000842',
      apy: 0.5,
      balance: 28450.75,
      pending: 0,
    },
    {
      id: 'acc-savings',
      name: 'Oceanic High-Yield Savings',
      type: 'Savings',
      accountNumberMasked: '•••• 9104',
      routingNumber: '021000842',
      apy: 4.85,
      balance: 142800.4,
      pending: 492.18,
    },
    {
      id: 'acc-treasury',
      name: 'Commercial Treasury Sweep',
      type: 'Treasury',
      accountNumberMasked: '•••• 3370',
      routingNumber: '021000842',
      apy: 5.1,
      balance: 315000.0,
      pending: 1338.75,
    },
  ],
  transactions: [
    {
      id: 'tx-1001',
      date: '2026-11-18',
      merchant: 'Oceanic Savings Monthly Interest',
      category: 'Interest Yield',
      accountId: 'acc-savings',
      type: 'credit',
      status: 'Posted',
      amount: 576.92,
      reference: 'BO-INT-88412',
    },
    {
      id: 'tx-1002',
      date: '2026-11-17',
      merchant: 'Delta Air Lines — Business Class',
      category: 'Travel',
      accountId: 'acc-checking',
      type: 'debit',
      status: 'Posted',
      amount: 1420.5,
      reference: 'BO-CRD-77291',
    },
    {
      id: 'tx-1003',
      date: '2026-11-16',
      merchant: 'Meridian Payroll Direct Deposit',
      category: 'Income',
      accountId: 'acc-checking',
      type: 'credit',
      status: 'Posted',
      amount: 9850.0,
      reference: 'BO-ACH-66310',
    },
    {
      id: 'tx-1004',
      date: '2026-11-15',
      merchant: 'U.S. Treasury 4-Week T-Bill Maturity',
      category: 'Treasury',
      accountId: 'acc-treasury',
      type: 'credit',
      status: 'Posted',
      amount: 1338.75,
      reference: 'BO-TRS-55102',
    },
    {
      id: 'tx-1005',
      date: '2026-11-14',
      merchant: 'Equinox Hudson Yards',
      category: 'Health & Wellness',
      accountId: 'acc-checking',
      type: 'debit',
      status: 'Posted',
      amount: 345.0,
      reference: 'BO-CRD-49821',
    },
    {
      id: 'tx-1006',
      date: '2026-11-13',
      merchant: 'Whole Foods Market Tribeca',
      category: 'Dining & Groceries',
      accountId: 'acc-checking',
      type: 'debit',
      status: 'Posted',
      amount: 218.4,
      reference: 'BO-CRD-44309',
    },
    {
      id: 'tx-1007',
      date: '2026-11-11',
      merchant: 'Automated Transfer to Savings',
      category: 'Internal Transfer',
      accountId: 'acc-savings',
      type: 'credit',
      status: 'Posted',
      amount: 3500.0,
      reference: 'BO-INT-39211',
    },
    {
      id: 'tx-1008',
      date: '2026-11-10',
      merchant: 'Con Edison Residential Utility',
      category: 'Utilities',
      accountId: 'acc-checking',
      type: 'debit',
      status: 'Posted',
      amount: 194.2,
      reference: 'BO-BIL-34118',
    },
    {
      id: 'tx-1009',
      date: '2026-11-08',
      merchant: 'Four Seasons Hotel Boston',
      category: 'Travel',
      accountId: 'acc-checking',
      type: 'debit',
      status: 'Pending',
      amount: 960.0,
      reference: 'BO-CRD-30112',
    },
  ],
  cards: [
    {
      id: 'card-titanium',
      name: 'Titanium Reserve Debit',
      finish: 'titanium',
      holder: 'ALEXANDRA MERCER',
      last4: '4821',
      fullNumber: '4532 8910 3314 4821',
      expiry: '09/29',
      cvv: '842',
      network: 'Visa Infinite',
      frozen: false,
      contactless: true,
      international: true,
      dailyLimit: 10000,
      monthlySpend: 3420,
    },
    {
      id: 'card-oceanic',
      name: 'Oceanic Sapphire Infinite',
      finish: 'oceanic',
      holder: 'ALEXANDRA MERCER',
      last4: '7704',
      fullNumber: '4916 5502 8821 7704',
      expiry: '11/29',
      cvv: '319',
      network: 'Visa Infinite',
      frozen: false,
      contactless: true,
      international: true,
      dailyLimit: 25000,
      monthlySpend: 6810,
    },
    {
      id: 'card-crimson',
      name: 'Crimson Apex Private',
      finish: 'crimson',
      holder: 'ALEXANDRA MERCER',
      last4: '9026',
      fullNumber: '5412 7539 1140 9026',
      expiry: '04/30',
      cvv: '605',
      network: 'Mastercard World Elite',
      frozen: false,
      contactless: true,
      international: false,
      dailyLimit: 50000,
      monthlySpend: 11250,
    },
  ],
  vaults: [
    {
      id: 'vault-1',
      name: 'Coastal Residence Down Payment',
      saved: 82500,
      target: 120000,
      apy: 4.85,
    },
    {
      id: 'vault-2',
      name: 'Quarterly Federal Tax Reserve',
      saved: 31400,
      target: 40000,
      apy: 4.85,
    },
    {
      id: 'vault-3',
      name: '12-Month Emergency Liquidity',
      saved: 28900,
      target: 35000,
      apy: 4.85,
    },
  ],
  alertsEnabled: {
    largeTransfers: true,
    cardInternational: true,
    monthlyStatement: true,
  },
};

function loadInitialState(): PersistedBankingState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw) as Partial<PersistedBankingState>;
    if (!Array.isArray(parsed.accounts) || !Array.isArray(parsed.cards)) {
      return INITIAL_STATE;
    }
    return {
      ...INITIAL_STATE,
      ...parsed,
    };
  } catch {
    return INITIAL_STATE;
  }
}

const BankingContext = createContext<BankingContextValue | null>(null);

export const BankingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<PersistedBankingState>(loadInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage quota errors
    }
  }, [state]);

  const signIn = useCallback((email?: string) => {
    setState((prev) => ({
      ...prev,
      isAuthenticated: true,
      profile: {
        ...prev.profile,
        email: email && email.trim() ? email.trim() : prev.profile.email,
      },
    }));
  }, []);

  const signOut = useCallback(() => {
    setState((prev) => ({ ...prev, isAuthenticated: false }));
  }, []);

  const executeTransfer = useCallback(
    (params: {
      fromAccountId: string;
      toAccountId?: string;
      externalRecipient?: string;
      amount: number;
      memo: string;
      mode: 'internal' | 'wire' | 'bill';
    }): { ok: boolean; error?: string } => {
      const amount = Number(params.amount);
      if (!Number.isFinite(amount) || amount <= 0) {
        return { ok: false, error: 'invalid' };
      }

      const source = state.accounts.find((a) => a.id === params.fromAccountId);
      if (!source || source.balance < amount) {
        return { ok: false, error: 'insufficient' };
      }

      const today = new Date().toISOString().slice(0, 10);
      const refNum = `BO-${params.mode === 'wire' ? 'WIR' : params.mode === 'bill' ? 'BIL' : 'INT'}-${Math.floor(
        10000 + Math.random() * 89999
      )}`;

      setState((prev) => {
        const nextAccounts = prev.accounts.map((acc) => {
          if (acc.id === params.fromAccountId) {
            return { ...acc, balance: Number((acc.balance - amount).toFixed(2)) };
          }
          if (params.mode === 'internal' && params.toAccountId && acc.id === params.toAccountId) {
            return { ...acc, balance: Number((acc.balance + amount).toFixed(2)) };
          }
          return acc;
        });

        const destinationAccount = prev.accounts.find((a) => a.id === params.toAccountId);
        const merchantName =
          params.mode === 'internal'
            ? `Transfer to ${destinationAccount?.name ?? 'BlueOcean Account'}`
            : params.externalRecipient?.trim() || (params.mode === 'bill' ? 'Scheduled Bill Payment' : 'Fedwire Outbound');

        const newTxs: BankTransaction[] = [
          {
            id: `tx-${Date.now()}`,
            date: today,
            merchant: params.memo.trim() ? `${merchantName} — ${params.memo.trim()}` : merchantName,
            category:
              params.mode === 'internal'
                ? 'Internal Transfer'
                : params.mode === 'bill'
                  ? 'Bill Pay'
                  : 'Wire / ACH',
            accountId: params.fromAccountId,
            type: 'debit',
            status: 'Posted',
            amount,
            reference: refNum,
          },
        ];

        if (params.mode === 'internal' && params.toAccountId) {
          newTxs.push({
            id: `tx-${Date.now()}-cr`,
            date: today,
            merchant: `Transfer from ${source.name}`,
            category: 'Internal Transfer',
            accountId: params.toAccountId,
            type: 'credit',
            status: 'Posted',
            amount,
            reference: refNum,
          });
        }

        return {
          ...prev,
          accounts: nextAccounts,
          transactions: [...newTxs, ...prev.transactions],
        };
      });

      return { ok: true };
    },
    [state.accounts]
  );

  const toggleCardSetting = useCallback(
    (cardId: string, key: 'frozen' | 'contactless' | 'international') => {
      setState((prev) => ({
        ...prev,
        cards: prev.cards.map((c) => (c.id === cardId ? { ...c, [key]: !c[key] } : c)),
      }));
    },
    []
  );

  const updateCardLimit = useCallback((cardId: string, limit: number) => {
    setState((prev) => ({
      ...prev,
      cards: prev.cards.map((c) => (c.id === cardId ? { ...c, dailyLimit: limit } : c)),
    }));
  }, []);

  const fundVault = useCallback(
    (vaultId: string, amount: number): { ok: boolean } => {
      const checking = state.accounts.find((a) => a.id === 'acc-checking');
      if (!checking || checking.balance < amount) return { ok: false };

      const targetVault = state.vaults.find((v) => v.id === vaultId);
      const today = new Date().toISOString().slice(0, 10);

      setState((prev) => ({
        ...prev,
        accounts: prev.accounts.map((acc) =>
          acc.id === 'acc-checking'
            ? { ...acc, balance: Number((acc.balance - amount).toFixed(2)) }
            : acc.id === 'acc-savings'
              ? { ...acc, balance: Number((acc.balance + amount).toFixed(2)) }
              : acc
        ),
        vaults: prev.vaults.map((v) =>
          v.id === vaultId ? { ...v, saved: Number((v.saved + amount).toFixed(2)) } : v
        ),
        transactions: [
          {
            id: `tx-vlt-${Date.now()}`,
            date: today,
            merchant: `Vault Deposit — ${targetVault?.name ?? 'Savings Vault'}`,
            category: 'Savings Vault',
            accountId: 'acc-checking',
            type: 'debit',
            status: 'Posted',
            amount,
            reference: `BO-VLT-${Math.floor(10000 + Math.random() * 89999)}`,
          },
          ...prev.transactions,
        ],
      }));
      return { ok: true };
    },
    [state.accounts, state.vaults]
  );

  const createVault = useCallback((name: string, target: number) => {
    if (!name.trim() || target <= 0) return;
    setState((prev) => ({
      ...prev,
      vaults: [
        ...prev.vaults,
        {
          id: `vault-${Date.now()}`,
          name: name.trim(),
          saved: 0,
          target,
          apy: 4.85,
        },
      ],
    }));
  }, []);

  const toggleAlert = useCallback(
    (key: 'largeTransfers' | 'cardInternational' | 'monthlyStatement') => {
      setState((prev) => ({
        ...prev,
        alertsEnabled: {
          ...prev.alertsEnabled,
          [key]: !prev.alertsEnabled[key],
        },
      }));
    },
    []
  );

  const resetDemoData = useCallback(() => {
    setState({ ...INITIAL_STATE, isAuthenticated: true });
  }, []);

  const exportTransactionsCsv = useCallback((rows: BankTransaction[]) => {
    const headers = ['Date', 'Merchant', 'Category', 'Account', 'Type', 'Status', 'Amount (USD)', 'Reference'];
    const escapeCell = (val: string | number) => `"${String(val).replace(/"/g, '""')}"`;
    const csvLines = [
      headers.join(','),
      ...rows.map((r) =>
        [
          r.date,
          r.merchant,
          r.category,
          r.accountId,
          r.type,
          r.status,
          r.type === 'debit' ? -r.amount : r.amount,
          r.reference,
        ]
          .map(escapeCell)
          .join(',')
      ),
    ];
    const blob = new Blob([csvLines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `blueocean-statement-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  const value = useMemo<BankingContextValue>(
    () => ({
      ...state,
      signIn,
      signOut,
      executeTransfer,
      toggleCardSetting,
      updateCardLimit,
      fundVault,
      createVault,
      toggleAlert,
      resetDemoData,
      exportTransactionsCsv,
    }),
    [
      state,
      signIn,
      signOut,
      executeTransfer,
      toggleCardSetting,
      updateCardLimit,
      fundVault,
      createVault,
      toggleAlert,
      resetDemoData,
      exportTransactionsCsv,
    ]
  );

  return <BankingContext.Provider value={value}>{children}</BankingContext.Provider>;
};

export function useBanking(): BankingContextValue {
  const ctx = useContext(BankingContext);
  if (!ctx) throw new Error('useBanking must be used inside BankingProvider');
  return ctx;
}
