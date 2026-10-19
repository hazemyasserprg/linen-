'use client';

import React, { useState } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import PillarsSection from '@/components/PillarsSection';
import FabricExplorer from '@/components/FabricExplorer';
import BespokeSection from '@/components/BespokeSection';
import TiersSection from '@/components/TiersSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import TradeModal from '@/components/TradeModal';

export default function HomePage() {
  const [spotsRemaining, setSpotsRemaining] = useState(94);
  const [isTradeModalOpen, setIsTradeModalOpen] = useState(false);

  const handleSuccessSubscribe = () => {
    setSpotsRemaining((prev) => Math.max(1, prev - 1));
  };

  return (
    <>
      <AnnouncementBar spotsRemaining={spotsRemaining} />
      <Header />
      <main>
        <Hero onSuccessSubscribe={handleSuccessSubscribe} />
        <Countdown />
        <PillarsSection />
        <FabricExplorer />
        <BespokeSection onOpenTradeModal={() => setIsTradeModalOpen(true)} />
        <TiersSection />
        <FaqSection />
      </main>
      <Footer />

      <TradeModal
        isOpen={isTradeModalOpen}
        onClose={() => setIsTradeModalOpen(false)}
      />
    </>
  );
}
