'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const pathname = usePathname();
  
  const menuItems = [
    { id: 'home', label: 'Ana Sayfa', href: '/' },
    { id: 'features', label: 'Özellikler', href: '/features' },
    { id: 'services', label: 'Referanslar', href: '/services' },
    { id: 'prices', label: 'Fiyatlar', href: '/prices' },
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

    {/* Menü */}
    <div className={styles.menuItems}>
      {menuItems.map((item) => (
        <Link 
          key={item.id}
          href={item.href}
          className={`${styles.menuItem} ${active === item.id ? styles.active : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </div>

    {/* Butonlar */}
    <div className={styles.buttonGroup}>
      <Link href="/login" className={styles.loginButton}>
        Giriş Yap
      </Link>
      <Link href="/trial" className={styles.trialButton}>
        Ücretsiz Dene!
      </Link>
    </div>

  </div>
</nav>

  );
};

export default React.memo(Navbar); 



