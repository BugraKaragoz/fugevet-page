'use client';

import { useEffect } from 'react';

export default function AdminLayoutWrapper({ children }) {
  useEffect(() => {
    const hideElement = (selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el) {
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
          el.style.pointerEvents = 'none';
        }
      });
    };
    
    // Hide site elements that might have been missed by CSS
    hideElement('header');
    hideElement('footer');
    hideElement('nav');
    hideElement('[class*="navbar"]');
    hideElement('[class*="footer"]');
    hideElement('[class*="nav-"]');
    hideElement('[class*="Navbar"]');
    hideElement('[class*="Footer"]');
    hideElement('[class*="ContactButton"]');
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Restore elements when component unmounts
      const showElement = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el) {
            el.style.display = '';
            el.style.opacity = '';
            el.style.visibility = '';
            el.style.pointerEvents = '';
          }
        });
      };
      
      showElement('header');
      showElement('footer');
      showElement('nav');
      showElement('[class*="navbar"]');
      showElement('[class*="footer"]');
      showElement('[class*="nav-"]');
      showElement('[class*="Navbar"]');
      showElement('[class*="Footer"]');
      showElement('[class*="ContactButton"]');
      
      // Restore body scrolling
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="admin-layout">
      {children}
    </div>
  );
} 