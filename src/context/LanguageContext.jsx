import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import arTranslations from '../translations/ar';
import enTranslations from '../translations/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize state with a function to prevent hydration issues
  const [language, setLanguage] = useState(() => {
    // This will only run on the client side
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'ar';
    }
    return 'ar'; // Default server-side
  });

  const translations = useMemo(() => ({
    ar: arTranslations,
    en: enTranslations
  }), [arTranslations, enTranslations]);

  const t = (key, fallback = '') => {
    try {
      const keys = key.split('.');
      const result = keys.reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), translations[language]);
      return result !== undefined ? result : fallback || key;
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return fallback || key;
    }
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'ar' ? 'en' : 'ar';
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLang);
      }
      return newLang;
    });
  };

  // Set HTML direction and language attribute when language changes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageContext;
