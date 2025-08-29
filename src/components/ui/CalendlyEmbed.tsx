'use client';

import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Discovery Call</h2>
          <p className="text-gray-600">Let's discuss how we can help transform your business with our expertise.</p>
        </div>

        {/* Calendly Embed */}
        <div className="h-full">
          <iframe
            src="https://calendly.com/kingsmenconsultancy/discovery-call-clone"
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-b-2xl"
            title="Schedule a Discovery Call"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyEmbed;