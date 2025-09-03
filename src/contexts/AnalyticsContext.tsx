'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackPageView: (page: string, title?: string) => void;
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, currency?: string) => void;
  trackFormSubmission: (formName: string, formData?: Record<string, any>) => void;
  trackButtonClick: (buttonName: string, buttonLocation: string) => void;
  trackScrollDepth: (depth: number) => void;
  trackTimeOnPage: (timeInSeconds: number) => void;
  trackUserEngagement: (action: string, details?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Google Analytics 4
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      // GA4 initialization
      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Initialize Google Tag Manager
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GTM_ID) {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',process.env.NEXT_PUBLIC_GTM_ID);
    }

    // Initialize Hotjar
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_HOTJAR_ID) {
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:process.env.NEXT_PUBLIC_HOTJAR_ID,hjsv:process.env.NEXT_PUBLIC_HOTJAR_SV};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    }

    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
      fbq('track', 'PageView');
    }

    // Initialize LinkedIn Insight Tag
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_LINKEDIN_ID) {
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);})(window.lintrk);
      window.lintrk('track', { conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_ID });
    }
  }, []);

  const trackPageView = (page: string, title?: string) => {
    if (typeof window !== 'undefined') {
      // GA4 Page View
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
          page_path: page,
          page_title: title || document.title,
        });
      }

      // Facebook Pixel Page View
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }

      // LinkedIn Page View
      if (window.lintrk) {
        window.lintrk('track', { conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_ID });
      }
    }
  };

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // GA4 Event
      if (window.gtag) {
        window.gtag('event', eventName, parameters);
      }

      // Facebook Pixel Event
      if (window.fbq) {
        window.fbq('track', eventName, parameters);
      }

      // LinkedIn Event
      if (window.lintrk) {
        window.lintrk('track', { conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_ID });
      }
    }
  };

  const trackConversion = (conversionType: string, value?: number, currency: string = 'USD') => {
    if (typeof window !== 'undefined') {
      // GA4 Conversion
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: `${process.env.NEXT_PUBLIC_GA_ID}/${conversionType}`,
          value: value,
          currency: currency,
        });
      }

      // Google Ads Conversion
      if (window.gtag && process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) {
        window.gtag('event', 'conversion', {
          send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID}`,
          value: value,
          currency: currency,
        });
      }

      // Facebook Pixel Conversion
      if (window.fbq) {
        window.fbq('track', 'Purchase', {
          value: value,
          currency: currency,
        });
      }
    }
  };

  const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
    trackEvent('form_submit', {
      form_name: formName,
      form_data: formData,
    });
  };

  const trackButtonClick = (buttonName: string, buttonLocation: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
    });
  };

  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth', {
      depth_percentage: depth,
    });
  };

  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent('time_on_page', {
      time_seconds: timeInSeconds,
    });
  };

  const trackUserEngagement = (action: string, details?: Record<string, any>) => {
    trackEvent('user_engagement', {
      action: action,
      details: details,
    });
  };

  return (
    <AnalyticsContext.Provider value={{
      trackPageView,
      trackEvent,
      trackConversion,
      trackFormSubmission,
      trackButtonClick,
      trackScrollDepth,
      trackTimeOnPage,
      trackUserEngagement,
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}
