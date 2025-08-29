'use client';

import { useState } from 'react';

export const useCalendly = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => setIsCalendlyOpen(true);
  const closeCalendly = () => setIsCalendlyOpen(false);

  return {
    isCalendlyOpen,
    openCalendly,
    closeCalendly
  };
};