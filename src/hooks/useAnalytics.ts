import { useAnalytics as useAnalyticsContext } from '@/contexts/AnalyticsContext';

// Re-export the analytics context hook for easier imports
export const useAnalytics = useAnalyticsContext;

// Additional utility functions for common tracking scenarios
export const useEnhancedAnalytics = () => {
  const analytics = useAnalyticsContext();

  const trackPageView = (page: string, title?: string) => {
    analytics.trackPageView(page, title);
  };

  const trackButtonClick = (buttonName: string, buttonLocation: string, additionalData?: Record<string, any>) => {
    analytics.trackButtonClick(buttonName, buttonLocation);
    if (additionalData) {
      analytics.trackEvent('button_click_enhanced', {
        button_name: buttonName,
        button_location: buttonLocation,
        ...additionalData
      });
    }
  };

  const trackFormInteraction = (formName: string, action: 'start' | 'complete' | 'abandon', formData?: Record<string, any>) => {
    analytics.trackEvent('form_interaction', {
      form_name: formName,
      action: action,
      form_data: formData
    });
  };

  const trackScrollDepth = (depth: number) => {
    analytics.trackScrollDepth(depth);
  };

  const trackTimeOnPage = (timeInSeconds: number) => {
    analytics.trackTimeOnPage(timeInSeconds);
  };

  const trackUserEngagement = (action: string, details?: Record<string, any>) => {
    analytics.trackUserEngagement(action, details);
  };

  const trackConversion = (conversionType: string, value?: number, currency: string = 'USD') => {
    analytics.trackConversion(conversionType, value, currency);
  };

  const trackLeadGeneration = (source: string, value?: number, additionalData?: Record<string, any>) => {
    analytics.trackConversion('lead_generation', value, 'USD');
    analytics.trackEvent('lead_generated', {
      source: source,
      value: value,
      currency: 'USD',
      ...additionalData
    });
  };

  const trackServiceInterest = (service: string, source: string) => {
    analytics.trackEvent('service_interest', {
      service: service,
      source: source,
      timestamp: new Date().toISOString()
    });
  };

  const trackCaseStudyView = (caseStudy: string, category: string) => {
    analytics.trackEvent('case_study_view', {
      case_study: caseStudy,
      category: category,
      timestamp: new Date().toISOString()
    });
  };

  const trackResourceDownload = (resource: string, type: string) => {
    analytics.trackEvent('resource_download', {
      resource: resource,
      type: type,
      timestamp: new Date().toISOString()
    });
  };

  const trackContactMethod = (method: string, source: string) => {
    analytics.trackEvent('contact_method_used', {
      method: method,
      source: source,
      timestamp: new Date().toISOString()
    });
  };

  return {
    ...analytics,
    trackPageView,
    trackButtonClick,
    trackFormInteraction,
    trackScrollDepth,
    trackTimeOnPage,
    trackUserEngagement,
    trackConversion,
    trackLeadGeneration,
    trackServiceInterest,
    trackCaseStudyView,
    trackResourceDownload,
    trackContactMethod,
  };
};
