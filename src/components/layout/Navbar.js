'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const menuItems = [
    { id: 'home', label: 'Ana Sayfa', href: '/' },
    { id: 'features', label: 'Özellikler', href: '/features' },
    { id: 'references', label: 'Referanslar', href: '/references' },
    { id: 'pricing', label: 'Fiyatlar', href: '/pricing' },
    { id: 'contact', label: 'İletişim', href: '/contact' },
  ];

  // URL değiştiğinde aktif menü öğesini güncelle - useMemo ile optimize edildi
  const currentMenuItem = useMemo(() => {
    return menuItems.find(item => 
      (item.href === '/' && pathname === '/') || 
      (item.href !== '/' && pathname.startsWith(item.href))
    );
  }, [pathname, menuItems]);
  
  useEffect(() => {
    if (currentMenuItem) {
      setActive(currentMenuItem.id);
    }
  }, [currentMenuItem]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/assets/Varlık 7.png" 
              alt="Logo" 
              width={150} 
              height={50} 
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Menü - Masaüstünde normal görünüm */}
        <div className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
          {menuItems.map((item) => (
            <Link 
              key={item.id}
              href={item.href}
              className={`${styles.menuItem} ${active === item.id ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobil görünümde butonlar menü içinde görünür */}
          <div className={styles.mobileButtons}>
            <Link href="/login" className={styles.loginButton}>
              Giriş Yap
            </Link>
            <Link href="/trial" className={styles.trialButton}>
              Ücretsiz Dene!
            </Link>
          </div>
        </div>

        {/* Butonlar - Sadece masaüstünde sağda */}
        <div className={styles.buttonGroup}>
          <Link href="/login" className={styles.loginButton}>
            Giriş Yap
          </Link>
          <Link href="/trial" className={styles.trialButton}>
            Ücretsiz Dene!
          </Link>
        </div>

        {/* Hamburger Menü Butonu - Sadece mobilde görünür */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu}
          aria-label="Menüyü aç/kapat"
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.active : ''}`}></span>
        </button>

      </div>
    </nav>
  );
};

export default React.memo(Navbar); 



