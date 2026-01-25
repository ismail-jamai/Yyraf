import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  // إغلاق القائمة المنسدلة للغة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Function to handle language change
  const handleLanguageChange = (newLang) => {
    if (language !== newLang) {
      toggleLanguage();
    }
    setIsLanguageOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* الشعار */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl md:text-3xl font-bold text-primary">
              {language === 'ar' ? 'دروبشيبينغ المغرب' : 'Morocco Dropshipping'}
            </Link>
          </div>

          {/* قائمة سطح المكتب */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-8">
            <Link to="/" className="text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold">
              {t('header.home')}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className="text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold flex items-center">
                {t('header.services')}
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {isServicesOpen && (
                <div className="absolute top/full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  <Link to="/services" className="block px-4 py-2 text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-700 hover:text-primary transition-colors font-bold">
                    {t('header.import')}
                  </Link>
                  <Link to="/services" className="block px-4 py-2 text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-700 hover:text-primary transition-colors font-bold">
                    {t('header.dropshipping')}
                  </Link>
                  <Link to="/services" className="block px-4 py-2 text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-700 hover:text-primary transition-colors font-bold">
                    {t('header.storage')}
                  </Link>
                  <Link to="/contact-center" className="block px-4 py-2 text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-700 hover:text-primary transition-colors font-bold">
                    {t('header.contact')}
                  </Link>
                  <Link to="/services" className="block px-4 py-2 text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-700 hover:text-primary transition-colors font-bold">
                    {t('header.payment')}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/faq" className="text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold">
              {t('header.faq')}
            </Link>
            <Link to="/how-it-works" className="text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold">
              {t('header.howItWorks')}
            </Link>

            {/* اختيار اللغة */}
            <div className="relative language-dropdown">
              <button
                className="text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold flex items-center"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                aria-label={language === 'ar' ? 'Change language to English' : 'تغيير اللغة إلى العربية'}
              >
                {language === 'ar' ? 'العربية' : 'English'}
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLanguageOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange(language === 'ar' ? 'en' : 'ar')}
                    className="block w/full text-right px-4 py-2 text-sm text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-700 hover:text-primary"
                  >
                    {language === 'ar' ? 'English' : 'العربية'}
                  </button>
                </div>
              )}
            </div>

            {/* تبديل الوضع */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? (language === 'ar' ? 'تفعيل الوضع النهاري' : 'Switch to light mode') : (language === 'ar' ? 'تفعيل الوضع الليلي' : 'Switch to dark mode')}
            >
              {theme === 'dark' ? (
                // Sun icon
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m12.728 0L17.95 7.05M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon icon
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 1112.646 3.646 7 7 0 0020.354 15.354z" />
                </svg>
              )}
            </button>

            <Link
              to="/register"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg transition-colors font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={t('header.register')}
            >
              {t('header.register')}
            </Link>
          </nav>

          {/* زر القائمة للجوال */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-text-primary dark:text-gray-100 hover:bg-secondary dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* قائمة الجوال */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <Link to="/" className="block py-2 text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold">
              {t('header.home')}
            </Link>
            <div className="py-2">
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold"
              >
                {t('header.services')}
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pr-4 mt-2 space-y-2">
                  <a href="#services" className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary transition-colors font-bold">
                    {t('header.import')}
                  </a>
                  <a href="#dropshipping" className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary transition-colors font-bold">
                    {t('header.dropshipping')}
                  </a>
                  <a href="#storage" className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary transition-colors font-bold">
                    {t('header.storage')}
                  </a>
                  <Link to="/contact-center" className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary transition-colors font-bold">
                    {t('header.contact')}
                  </Link>
                  <a href="#payment" className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary transition-colors font-bold">
                    {t('header.payment')}
                  </a>
                </div>
              )}
            </div>
            <Link to="/faq" className="block py-2 text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold">
              {t('header.faq')}
            </Link>
            <Link to="/how-it-works" className="block py-2 text-text-primary dark:text-gray-100 hover:text-primary transition-colors font-bold">
              {t('header.howItWorks')}
            </Link>
            <Link
              to="/register"
              className="block mt-4 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg transition-colors font-bold text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={t('header.register')}
            >
              {t('header.register')}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
