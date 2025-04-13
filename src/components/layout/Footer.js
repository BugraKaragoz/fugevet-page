'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada e-posta aboneliği işlemi gerçekleştirilecek
    alert('Bülten aboneliğiniz için teşekkürler!');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      {/* Dekoratif elementler */}
      <div className={styles.decorDot}></div>
      <div className={styles.decorCircle}></div>
      
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <Link href="/">
                <Image 
                  src="/assets/Varlık 7.png" 
                  alt="Logo" 
                  width={180} 
                  height={60} 
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <p className={styles.footerDesc}>
              FugeVet, veteriner klinikleriniz için modern, kullanımı kolay ve kapsamlı yönetim yazılımı. Hayvan dostlarınızın sağlığı bizim önceliğimizdir.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/fugevet/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.15019 6.03727 2.93973 5.52846 2.94 4.99802C2.94026 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94026 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/fugevet/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0001 7.38C9.45006 7.38 7.38006 9.45 7.38006 12C7.38006 14.55 9.45006 16.62 12.0001 16.62C14.5501 16.62 16.6201 14.55 16.6201 12C16.6201 9.45 14.5501 7.38 12.0001 7.38ZM12.0001 15.12C10.2701 15.12 8.88006 13.73 8.88006 12C8.88006 10.27 10.2701 8.88 12.0001 8.88C13.7301 8.88 15.1201 10.27 15.1201 12C15.1201 13.73 13.7301 15.12 12.0001 15.12Z" fill="currentColor"/>
                  <path d="M16.83 7.19999C16.83 7.73105 16.4016 8.15999 15.87 8.15999C15.34 8.15999 14.91 7.73105 14.91 7.19999C14.91 6.66893 15.34 6.23999 15.87 6.23999C16.4016 6.23999 16.83 6.66893 16.83 7.19999Z" fill="currentColor"/>
                  <path d="M16.2699 3.5998H7.72991C5.49991 3.5998 3.59991 5.4998 3.59991 7.7298V16.2698C3.59991 18.4998 5.49991 20.3998 7.72991 20.3998H16.2699C18.4999 20.3998 20.3999 18.4998 20.3999 16.2698V7.7298C20.3999 5.4998 18.4999 3.5998 16.2699 3.5998ZM18.8999 16.2698C18.8999 17.6698 17.6699 18.8998 16.2699 18.8998H7.72991C6.32991 18.8998 5.09991 17.6698 5.09991 16.2698V7.7298C5.09991 6.3298 6.32991 5.0998 7.72991 5.0998H16.2699C17.6699 5.0998 18.8999 6.3298 18.8999 7.7298V16.2698Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Hızlı Erişim</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Ana Sayfa</Link></li>
              <li><Link href="/features">Özellikler</Link></li>
              <li><Link href="/references">Referanslar</Link></li>
              <li><Link href="/pricing">Fiyatlar</Link></li>
              <li><Link href="/contact">İletişim</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Destek</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/faq">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/help">Yardım Merkezi</Link></li>
              <li><Link href="/privacy">Gizlilik Politikası</Link></li>
              <li><Link href="/terms">Kullanım Koşulları</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Bültenimize Abone Olun</h3>
            <p className={styles.newsletterDesc}>En son haberler, güncellemeler ve özel indirimlerden haberdar olun.</p>
            <form className={styles.newsletterForm} onSubmit={handleSubmit}>
              <input 
                type="email" 
                className={styles.newsletterInput}
                placeholder="E-posta adresiniz" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className={styles.newsletterButton} aria-label="Gönder">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                <span>Üniversiteler Mah. 1597 Cad.<br/>Bilkent Center AVM CYBERGO<br/>Bilkent Çankaya/Ankara</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                </svg>
                <span>+90 507 300 83 00</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
                <span>info@fugesoft.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom footer - Görseldeki gibi düzenlendi */}
        <div className={styles.bottomFooter}>
          <div className={styles.logoSection}>
            <Image 
              src="/assets/Varlık 7.png" 
              alt="FugeVet Logo" 
              width={150} 
              height={50} 
              className={styles.bottomLogo}
            />
          </div>
          
          <div className={styles.microsoftSection}>
            <Image 
              src="/assets/microsoft.png" 
              alt="Microsoft Partner" 
              width={100} 
              height={60} 
              className={styles.microsoftLogo}
            />
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.infoLinks}>
              <Link href="/privacy" className={styles.infoLink}>Gizlilik Politikası</Link>
              <Link href="/terms" className={styles.infoLink}>Kullanım Sözleşmesi</Link>
              <Link href="/contact" className={styles.infoLink}>İletişim</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 