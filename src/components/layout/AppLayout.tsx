'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CalendlyEmbed from '@/components/ui/CalendlyEmbed';
import { CalendlyProvider, useCalendly } from '@/contexts/CalendlyContext';
import { AnalyticsProvider } from '@/contexts/AnalyticsContext';

function AppContent({ children }: { children: React.ReactNode }) {
  const { isCalendlyOpen, closeCalendly } = useCalendly();

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <CalendlyEmbed isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsProvider>
      <CalendlyProvider>
        <AppContent>
          {children}
        </AppContent>
      </CalendlyProvider>
    </AnalyticsProvider>
  );
}