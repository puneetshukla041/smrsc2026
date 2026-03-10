'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'gdpr-cookie-consent';
const COOKIE_CONSENT_VERSION = '1.0';

interface CookieConsent {
  version: string;
  timestamp: string;
  analytics: boolean;
  marketing: boolean;
  essential: boolean; // Always true
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (!storedConsent) {
      // Show banner only if no consent has been saved
      const fadeInTimer = setTimeout(() => {
        setIsVisible(true);
      }, 500); // Small delay for page load
      return () => clearTimeout(fadeInTimer);
    }
  }, []);

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveSettings = () => {
    saveConsent(cookieSettings);
  };

  const saveConsent = (settings: typeof cookieSettings) => {
    const consent: CookieConsent = {
      version: COOKIE_CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      ...settings,
    };
    
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    
    // Trigger custom event so other components can listen for consent changes
    window.dispatchEvent(new CustomEvent('gdpr-consent-changed', { detail: consent }));
    
    // If analytics was accepted, start tracking
    if (settings.analytics) {
      startAnalytics();
    }
    
    dismissBanner();
  };

  const startAnalytics = () => {
    // Your analytics tracking code here
    // This will only run after consent is given
    window.dispatchEvent(new CustomEvent('gdpr-analytics-start'));
  };

  const dismissBanner = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsRendered(false);
    }, 500);
  };

  const openSettings = () => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      try {
        const parsed = JSON.parse(storedConsent);
        setCookieSettings({
          essential: true,
          analytics: parsed.analytics || false,
          marketing: parsed.marketing || false,
        });
      } catch (e) {
        console.error('Failed to parse cookie consent:', e);
      }
    }
    setShowSettings(true);
  };

  // If the banner is fully unmounted, return nothing
  if (!isRendered) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-[100] bg-[#02091A] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 py-4 sm:py-5">
        
        {!showSettings ? (
          // Main Banner View
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic. 
                <strong> Essential cookies</strong> are always enabled. You can choose to accept 
                <strong> analytics</strong> cookies to help us improve the site, or 
                <strong> marketing</strong> cookies for personalized ads.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button 
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-center text-sm font-medium whitespace-nowrap"
              >
                Reject All
              </button>
              <button 
                onClick={openSettings}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-center text-sm font-medium whitespace-nowrap"
              >
                Cookie Settings
              </button>
              <button 
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#3FD0D4] text-[#02091A] hover:bg-opacity-90 transition-colors text-center text-sm font-semibold whitespace-nowrap cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Settings View
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-semibold">Cookie Preferences</h3>
            
            {/* Cookie Options */}
            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="essential"
                  checked={true}
                  disabled
                  className="mt-1 w-4 h-4 rounded text-[#3FD0D4] cursor-not-allowed"
                />
                <label htmlFor="essential" className="text-gray-300 text-sm flex-1">
                  <span className="font-semibold text-white">Essential Cookies (Always Enabled)</span>
                  <p className="text-xs text-gray-400 mt-1">Required for site functionality, security, and basic operations.</p>
                </label>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="analytics"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({...cookieSettings, analytics: e.target.checked})}
                  className="mt-1 w-4 h-4 rounded text-[#3FD0D4] cursor-pointer"
                />
                <label htmlFor="analytics" className="text-gray-300 text-sm flex-1">
                  <span className="font-semibold text-white">Analytics Cookies</span>
                  <p className="text-xs text-gray-400 mt-1">Help us understand how you use the site to improve performance and user experience.</p>
                </label>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="marketing"
                  checked={cookieSettings.marketing}
                  onChange={(e) => setCookieSettings({...cookieSettings, marketing: e.target.checked})}
                  className="mt-1 w-4 h-4 rounded text-[#3FD0D4] cursor-pointer"
                />
                <label htmlFor="marketing" className="text-gray-300 text-sm flex-1">
                  <span className="font-semibold text-white">Marketing Cookies</span>
                  <p className="text-xs text-gray-400 mt-1">Used to track your preferences and deliver personalized content and advertisements.</p>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <Link 
                href="/cookies" 
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-center text-sm font-medium whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <button 
                onClick={() => setShowSettings(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-center text-sm font-medium whitespace-nowrap"
              >
                Back
              </button>
              <button 
                onClick={handleSaveSettings}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#3FD0D4] text-[#02091A] hover:bg-opacity-90 transition-colors text-center text-sm font-semibold whitespace-nowrap cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;