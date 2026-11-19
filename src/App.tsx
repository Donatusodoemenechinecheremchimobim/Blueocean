import React, { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { AppProvider, useApp } from './context/AppContext';
import { BankingProvider } from './context/BankingContext';
import { SmoothScroll } from './components/SmoothScroll';
import { KineticBackground } from './components/KineticBackground';
import { SplashScreen } from './components/SplashScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { ToastStack } from './components/ToastStack';
import { HomePage } from './pages/HomePage';
import { PersonalBankingPage } from './pages/PersonalBankingPage';
import { BusinessTreasuryPage } from './pages/BusinessTreasuryPage';
import { CardsRewardsPage } from './pages/CardsRewardsPage';
import { LoansMortgagesPage } from './pages/LoansMortgagesPage';
import { PrivateWealthPage } from './pages/PrivateWealthPage';
import { SecurityTrustPage } from './pages/SecurityTrustPage';
import { ClientPortalPage } from './pages/ClientPortalPage';

const PageRouter: React.FC = () => {
  const { route } = useApp();

  const renderPage = () => {
    switch (route) {
      case 'personal':
        return <PersonalBankingPage />;
      case 'business':
        return <BusinessTreasuryPage />;
      case 'cards':
        return <CardsRewardsPage />;
      case 'loans':
        return <LoansMortgagesPage />;
      case 'wealth':
        return <PrivateWealthPage />;
      case 'security':
        return <SecurityTrustPage />;
      case 'portal':
        return <ClientPortalPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={route}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        className="will-change-[opacity,transform]"
      >
        {renderPage()}
      </motion.div>
    </AnimatePresence>
  );
};

export function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <AppProvider>
        <BankingProvider>
          <SmoothScroll />
          <div className="min-h-screen flex flex-col relative overflow-x-clip">
            {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
            <KineticBackground />
            <Navigation />
            <div className="flex-1">
              <PageRouter />
            </div>
            <Footer />
            <ApplicationModal />
            <ToastStack />
          </div>
        </BankingProvider>
      </AppProvider>
    </MotionConfig>
  );
}

export default App;
