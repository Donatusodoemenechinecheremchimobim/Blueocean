import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export interface BankAccount {
  id: string;
  name: string;
  type: 'Checking' | 'Savings' | 'Treasury' | 'Business';
  accountCategory?: 'personal' | 'business';
  receivingCurrencies?: string;
  iban?: string;
  swiftCode?: string;
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
  isVirtual?: boolean;
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

export interface ActiveSubscription {
  serviceId: string;
  name: string;
  plan: string;
  price: number;
  cardId: string;
  cardLast4: string;
  accountId: string;
  autoPay: boolean;
  lastPaidDate: string;
  nextBillingDate: string;
}

interface PersistedBankingState {
  isAuthenticated: boolean;
  profile: ClientProfile;
  accounts: BankAccount[];
  transactions: BankTransaction[];
  cards: MetalCard[];
  vaults: SavingsVault[];
  activeSubscriptions: ActiveSubscription[];
  subscriptionAuthorizations: Record<string, string[]>;
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
  issueVirtualCard: (params: {
    finish: CardFinish;
    tierName: string;
    customLabel?: string;
    fromAccountId: string;
    fee: number;
    dailyLimit: number;
  }) => { ok: boolean; cardId?: string; error?: string };
  fundVault: (vaultId: string, amount: number) => { ok: boolean };
  createVault: (name: string, target: number) => void;
  paySubscription: (params: {
    serviceId: string;
    name: string;
    plan: string;
    price: number;
    cardId: string;
    accountId: string;
  }) => { ok: boolean; error?: 'insufficient' | 'frozen' | 'unauthorized' | 'invalid' };
  toggleSubscriptionAutoPay: (serviceId: string) => void;
  cancelSubscription: (serviceId: string) => void;
  toggleSubscriptionAuth: (cardId: string, serviceId: string) => boolean;
  setAllSubscriptionAuths: (cardId: string, serviceIds: string[], authorized: boolean) => void;
  openNewAccount: (params: {
    accountCategory: 'personal' | 'business';
    accountName: string;
    ownerName: string;
    email: string;
    startingDeposit?: number;
    receivingCurrencies?: string;
  }) => {
    ok: boolean;
    accountId: string;
    accountNumberMasked: string;
    routingNumber: string;
    iban: string;
    swiftCode: string;
  };
  toggleAlert: (key: 'largeTransfers' | 'cardInternational' | 'monthlyStatement') => void;
  resetDemoData: () => void;
  exportTransactionsCsv: (rows: BankTransaction[]) => void;
}

const STORAGE_KEY = 'blueocean_banking_portal_v2';

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
      name: 'Personal Global Account',
      type: 'Checking',
      accountCategory: 'personal',
      receivingCurrencies: 'USD · EUR · GBP',
      iban: 'GB29 BLOC 2048 1900 4821 01',
      swiftCode: 'BLOCGB2LXXX',
      accountNumberMasked: '•••• 4821',
      routingNumber: '021000842',
      apy: 0.5,
      balance: 28450.75,
      pending: 0,
    },
    {
      id: 'acc-savings',
      name: 'Personal High-Yield Savings',
      type: 'Savings',
      accountCategory: 'personal',
      receivingCurrencies: 'USD',
      iban: 'GB29 BLOC 2048 1900 9104 02',
      swiftCode: 'BLOCGB2LXXX',
      accountNumberMasked: '•••• 9104',
      routingNumber: '021000842',
      apy: 4.85,
      balance: 142800.4,
      pending: 492.18,
    },
    {
      id: 'acc-treasury',
      name: 'Global Business Account',
      type: 'Business',
      accountCategory: 'business',
      receivingCurrencies: 'USD · EUR · GBP · 38+ Currencies',
      iban: 'GB44 BLOC 2048 1900 3370 88',
      swiftCode: 'BLOCGB2LXXX',
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
      merchant: 'International Client Invoice Payout (EUR → USD)',
      category: 'Business Income',
      accountId: 'acc-treasury',
      type: 'credit',
      status: 'Posted',
      amount: 1338.75,
      reference: 'BO-INT-55102',
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
      merchant: 'Claridge’s Hotel London',
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
      name: 'Standard Virtual Credit',
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
      isVirtual: true,
    },
    {
      id: 'card-oceanic',
      name: 'Oceanic Virtual Credit',
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
      isVirtual: true,
    },
    {
      id: 'card-crimson',
      name: 'Crimson Virtual Credit',
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
      isVirtual: true,
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
  activeSubscriptions: [
    {
      serviceId: 'netflix',
      name: 'Netflix',
      plan: 'Standard Monthly',
      price: 15.49,
      cardId: 'card-titanium',
      cardLast4: '4821',
      accountId: 'acc-checking',
      autoPay: true,
      lastPaidDate: '2026-11-12',
      nextBillingDate: '2026-12-12',
    },
    {
      serviceId: 'chatgpt-plus',
      name: 'ChatGPT Plus',
      plan: 'OpenAI Monthly',
      price: 20.0,
      cardId: 'card-titanium',
      cardLast4: '4821',
      accountId: 'acc-checking',
      autoPay: true,
      lastPaidDate: '2026-11-15',
      nextBillingDate: '2026-12-15',
    },
  ],
  subscriptionAuthorizations: {
    'card-titanium': ['netflix', 'chatgpt-plus', 'amazon-prime', 'spotify', 'apple-icloud', 'youtube-premium'],
    'card-oceanic': ['youtube-premium', 'uber-one', 'google-one', 'audible', 'dropbox-plus'],
    'card-crimson': ['adobe-cc', 'github-copilot', 'figma-pro', 'zoom-pro', 'notion-plus', 'microsoft-365'],
  },
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
    const normalizedAccounts: BankAccount[] = parsed.accounts.map((acc) => {
      const inferredCategory: 'personal' | 'business' =
        acc.accountCategory ??
        (acc.type === 'Treasury' || acc.type === 'Business' || acc.name.toLowerCase().includes('business')
          ? 'business'
          : 'personal');
      const digits = acc.accountNumberMasked.replace(/\D/g, '').slice(-4) || '4821';
      return {
        ...acc,
        accountCategory: inferredCategory,
        receivingCurrencies:
          acc.receivingCurrencies ??
          (inferredCategory === 'business' ? 'USD · EUR · GBP · 38+ Currencies' : 'USD · EUR · GBP'),
        iban: acc.iban ?? `GB29 BLOC 2048 1900 ${digits} ${inferredCategory === 'business' ? '88' : '01'}`,
        swiftCode: acc.swiftCode ?? 'BLOCGB2LXXX',
      };
    });
    return {
      ...INITIAL_STATE,
      ...parsed,
      accounts: normalizedAccounts,
      activeSubscriptions: Array.isArray(parsed.activeSubscriptions)
        ? parsed.activeSubscriptions
        : INITIAL_STATE.activeSubscriptions,
      subscriptionAuthorizations:
        parsed.subscriptionAuthorizations && typeof parsed.subscriptionAuthorizations === 'object'
          ? parsed.subscriptionAuthorizations
          : INITIAL_STATE.subscriptionAuthorizations,
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

  const issueVirtualCard = useCallback(
    (params: {
      finish: CardFinish;
      tierName: string;
      customLabel?: string;
      fromAccountId: string;
      fee: number;
      dailyLimit: number;
    }): { ok: boolean; cardId?: string; error?: string } => {
      const source = state.accounts.find((a) => a.id === params.fromAccountId);
      if (!source || source.balance < params.fee) {
        return { ok: false, error: 'insufficient' };
      }

      const rand4 = () => String(Math.floor(1000 + Math.random() * 9000));
      const prefix = params.finish === 'crimson' ? '5412' : '4532';
      const last4 = rand4();
      const fullNumber = `${prefix}  ${rand4()}  ${rand4()}  ${last4}`;
      const cvv = String(Math.floor(100 + Math.random() * 900));
      const cardId = `card-virtual-${Date.now()}`;
      const cleanLabel = params.customLabel?.trim();
      const displayName = cleanLabel ? `${cleanLabel} (${params.tierName})` : params.tierName;
      const today = new Date().toISOString().slice(0, 10);
      const refNum = `BO-VCD-${Math.floor(10000 + Math.random() * 89999)}`;

      const newCard: MetalCard = {
        id: cardId,
        name: displayName,
        finish: params.finish,
        holder: state.profile.name.toUpperCase(),
        last4,
        fullNumber,
        expiry: '11/30',
        cvv,
        network: params.finish === 'crimson' ? 'Mastercard World Elite' : 'Visa Infinite',
        frozen: false,
        contactless: true,
        international: true,
        dailyLimit: params.dailyLimit,
        monthlySpend: 0,
        isVirtual: true,
      };

      setState((prev) => ({
        ...prev,
        accounts: prev.accounts.map((acc) =>
          acc.id === params.fromAccountId
            ? { ...acc, balance: Number((acc.balance - params.fee).toFixed(2)) }
            : acc
        ),
        cards: [newCard, ...prev.cards],
        subscriptionAuthorizations: {
          ...prev.subscriptionAuthorizations,
          [cardId]: ['netflix', 'amazon-prime', 'chatgpt-plus', 'spotify', 'apple-icloud'],
        },
        transactions: [
          {
            id: `tx-vcd-${Date.now()}`,
            date: today,
            merchant: `Virtual Card Issuance — ${displayName}`,
            category: 'Virtual Card',
            accountId: params.fromAccountId,
            type: 'debit',
            status: 'Posted',
            amount: params.fee,
            reference: refNum,
          },
          ...prev.transactions,
        ],
      }));

      return { ok: true, cardId };
    },
    [state.accounts, state.profile.name]
  );

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

  const paySubscription = useCallback(
    (params: {
      serviceId: string;
      name: string;
      plan: string;
      price: number;
      cardId: string;
      accountId: string;
    }): { ok: boolean; error?: 'insufficient' | 'frozen' | 'unauthorized' | 'invalid' } => {
      const card = state.cards.find((c) => c.id === params.cardId);
      const source = state.accounts.find((a) => a.id === params.accountId);
      if (!card || !source || params.price <= 0) {
        return { ok: false, error: 'invalid' };
      }
      if (card.frozen) {
        return { ok: false, error: 'frozen' };
      }
      const cardAuthList = state.subscriptionAuthorizations[card.id] ?? [];
      if (!cardAuthList.includes(params.serviceId)) {
        return { ok: false, error: 'unauthorized' };
      }
      if (source.balance < params.price) {
        return { ok: false, error: 'insufficient' };
      }

      const now = new Date();
      const today = now.toISOString().slice(0, 10);
      const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
      const refNum = `BO-SUB-${Math.floor(10000 + Math.random() * 89999)}`;

      setState((prev) => {
        const nextAccounts = prev.accounts.map((acc) =>
          acc.id === params.accountId
            ? { ...acc, balance: Number((acc.balance - params.price).toFixed(2)) }
            : acc
        );
        const nextCards = prev.cards.map((c) =>
          c.id === params.cardId
            ? { ...c, monthlySpend: Number((c.monthlySpend + params.price).toFixed(2)) }
            : c
        );
        const updatedEntry: ActiveSubscription = {
          serviceId: params.serviceId,
          name: params.name,
          plan: params.plan,
          price: params.price,
          cardId: card.id,
          cardLast4: card.last4,
          accountId: params.accountId,
          autoPay: true,
          lastPaidDate: today,
          nextBillingDate: nextMonth,
        };
        const exists = prev.activeSubscriptions.some((s) => s.serviceId === params.serviceId);
        const nextSubs = exists
          ? prev.activeSubscriptions.map((s) => (s.serviceId === params.serviceId ? updatedEntry : s))
          : [updatedEntry, ...prev.activeSubscriptions];

        return {
          ...prev,
          accounts: nextAccounts,
          cards: nextCards,
          activeSubscriptions: nextSubs,
          transactions: [
            {
              id: `tx-sub-${Date.now()}`,
              date: today,
              merchant: `${params.name} — ${params.plan} (Card •••• ${card.last4})`,
              category: 'Subscriptions',
              accountId: params.accountId,
              type: 'debit',
              status: 'Posted',
              amount: params.price,
              reference: refNum,
            },
            ...prev.transactions,
          ],
        };
      });

      return { ok: true };
    },
    [state.accounts, state.cards, state.subscriptionAuthorizations]
  );

  const toggleSubscriptionAutoPay = useCallback((serviceId: string) => {
    setState((prev) => ({
      ...prev,
      activeSubscriptions: prev.activeSubscriptions.map((sub) =>
        sub.serviceId === serviceId ? { ...sub, autoPay: !sub.autoPay } : sub
      ),
    }));
  }, []);

  const cancelSubscription = useCallback((serviceId: string) => {
    setState((prev) => ({
      ...prev,
      activeSubscriptions: prev.activeSubscriptions.filter((sub) => sub.serviceId !== serviceId),
    }));
  }, []);

  const toggleSubscriptionAuth = useCallback(
    (cardId: string, serviceId: string): boolean => {
      const currentList = state.subscriptionAuthorizations[cardId] ?? [];
      const willAuthorize = !currentList.includes(serviceId);
      setState((prev) => {
        const prevList = prev.subscriptionAuthorizations[cardId] ?? [];
        const nextList = prevList.includes(serviceId)
          ? prevList.filter((id) => id !== serviceId)
          : [...prevList, serviceId];
        return {
          ...prev,
          subscriptionAuthorizations: {
            ...prev.subscriptionAuthorizations,
            [cardId]: nextList,
          },
        };
      });
      return willAuthorize;
    },
    [state.subscriptionAuthorizations]
  );

  const setAllSubscriptionAuths = useCallback(
    (cardId: string, serviceIds: string[], authorized: boolean) => {
      setState((prev) => {
        const prevSet = new Set(prev.subscriptionAuthorizations[cardId] ?? []);
        if (authorized) {
          serviceIds.forEach((id) => prevSet.add(id));
        } else {
          serviceIds.forEach((id) => prevSet.delete(id));
        }
        return {
          ...prev,
          subscriptionAuthorizations: {
            ...prev.subscriptionAuthorizations,
            [cardId]: Array.from(prevSet),
          },
        };
      });
    },
    []
  );

  const openNewAccount = useCallback(
    (params: {
      accountCategory: 'personal' | 'business';
      accountName: string;
      ownerName: string;
      email: string;
      startingDeposit?: number;
      receivingCurrencies?: string;
    }) => {
      const last4 = String(Math.floor(1000 + Math.random() * 9000));
      const check2 = String(Math.floor(10 + Math.random() * 89));
      const accountId = `acc-${params.accountCategory}-${Date.now()}`;
      const accountNumberMasked = `•••• ${last4}`;
      const routingNumber = '021000842';
      const iban = `GB${check2} BLOC 2048 1900 ${last4} ${params.accountCategory === 'business' ? '88' : '01'}`;
      const swiftCode = 'BLOCGB2LXXX';
      const deposit = Number.isFinite(params.startingDeposit) && (params.startingDeposit ?? 0) > 0
        ? Number((params.startingDeposit ?? 0).toFixed(2))
        : 0;
      const today = new Date().toISOString().slice(0, 10);

      const created: BankAccount = {
        id: accountId,
        name: params.accountName.trim() || (params.accountCategory === 'business' ? 'Global Business Account' : 'Personal Global Account'),
        type: params.accountCategory === 'business' ? 'Business' : 'Checking',
        accountCategory: params.accountCategory,
        receivingCurrencies:
          params.receivingCurrencies?.trim() ||
          (params.accountCategory === 'business' ? 'USD · EUR · GBP · 38+ Currencies' : 'USD · EUR · GBP'),
        iban,
        swiftCode,
        accountNumberMasked,
        routingNumber,
        apy: params.accountCategory === 'business' ? 5.1 : 4.85,
        balance: deposit,
        pending: 0,
      };

      setState((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          name: params.ownerName.trim() || prev.profile.name,
          email: params.email.trim() || prev.profile.email,
        },
        accounts: [created, ...prev.accounts],
        transactions:
          deposit > 0
            ? [
                {
                  id: `tx-open-${Date.now()}`,
                  date: today,
                  merchant: `Opening Deposit — ${created.name}`,
                  category: params.accountCategory === 'business' ? 'Business Income' : 'Opening Deposit',
                  accountId,
                  type: 'credit',
                  status: 'Posted',
                  amount: deposit,
                  reference: `BO-NEW-${last4}`,
                },
                ...prev.transactions,
              ]
            : prev.transactions,
      }));

      return {
        ok: true,
        accountId,
        accountNumberMasked,
        routingNumber,
        iban,
        swiftCode,
      };
    },
    []
  );

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
      issueVirtualCard,
      fundVault,
      createVault,
      paySubscription,
      toggleSubscriptionAutoPay,
      cancelSubscription,
      toggleSubscriptionAuth,
      setAllSubscriptionAuths,
      openNewAccount,
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
      issueVirtualCard,
      fundVault,
      createVault,
      paySubscription,
      toggleSubscriptionAutoPay,
      cancelSubscription,
      toggleSubscriptionAuth,
      setAllSubscriptionAuths,
      openNewAccount,
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
