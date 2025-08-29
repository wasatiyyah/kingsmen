'use client';

import dynamic from 'next/dynamic';
import { Moon } from 'lucide-react';

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => (
    <button
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label="Loading theme toggle"
      disabled
    >
      <Moon className="w-5 h-5 text-gray-600" />
    </button>
  ),
});

export default ThemeToggle;