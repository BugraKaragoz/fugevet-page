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
              PawSoft, veteriner klinikleriniz için modern, kullanımı kolay ve kapsamlı yönetim yazılımı. Hayvan dostlarınızın sağlığı bizim önceliğimizdir.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.79997C21.2483 6.12607 20.4534 6.34412 19.64 6.44997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98916 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.44356 12.0852 6.2708C11.7135 7.09804 11.6273 8.02473 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66385C5.70287 6.92479 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.082 3.36989 9.91222 2.8 9.59997V9.65997C2.8036 10.5849 3.13285 11.4783 3.73685 12.1883C4.34084 12.8983 5.17971 13.3837 6.1 13.56C5.74326 13.6729 5.37287 13.7312 5 13.7333C4.74189 13.7304 4.48442 13.7046 4.23 13.6567C4.49391 14.4486 5.00462 15.1414 5.69107 15.6464C6.37753 16.1514 7.20558 16.4463 8.06 16.49C6.6172 17.6335 4.83588 18.2495 3 18.25C2.66574 18.2517 2.33174 18.2317 2 18.19C3.87443 19.4085 6.05881 20.0034 8.29 20C15.84 20 19.96 13.8433 19.96 8.51997C19.96 8.33997 19.96 8.15997 19.95 7.97997C20.7542 7.38915 21.4491 6.65701 22 5.81997L22 5.79997Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0001 7.38C9.45006 7.38 7.38006 9.45 7.38006 12C7.38006 14.55 9.45006 16.62 12.0001 16.62C14.5501 16.62 16.6201 14.55 16.6201 12C16.6201 9.45 14.5501 7.38 12.0001 7.38ZM12.0001 15.12C10.2701 15.12 8.88006 13.73 8.88006 12C8.88006 10.27 10.2701 8.88 12.0001 8.88C13.7301 8.88 15.1201 10.27 15.1201 12C15.1201 13.73 13.7301 15.12 12.0001 15.12Z" fill="currentColor"/>
                  <path d="M16.83 7.19999C16.83 7.73105 16.4016 8.15999 15.87 8.15999C15.34 8.15999 14.91 7.73105 14.91 7.19999C14.91 6.66893 15.34 6.23999 15.87 6.23999C16.4016 6.23999 16.83 6.66893 16.83 7.19999Z" fill="currentColor"/>
                  <path d="M16.2699 3.5998H7.72991C5.49991 3.5998 3.59991 5.4998 3.59991 7.7298V16.2698C3.59991 18.4998 5.49991 20.3998 7.72991 20.3998H16.2699C18.4999 20.3998 20.3999 18.4998 20.3999 16.2698V7.7298C20.3999 5.4998 18.4999 3.5998 16.2699 3.5998ZM18.8999 16.2698C18.8999 17.6698 17.6699 18.8998 16.2699 18.8998H7.72991C6.32991 18.8998 5.09991 17.6698 5.09991 16.2698V7.7298C5.09991 6.3298 6.32991 5.0998 7.72991 5.0998H16.2699C17.6699 5.0998 18.8999 6.3298 18.8999 7.7298V16.2698Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>Hızlı Erişim</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Ana Sayfa</Link></li>
              <li><Link href="/about">Hakkımızda</Link></li>
              <li><Link href="/features">Özellikler</Link></li>
              <li><Link href="/pricing">Fiyatlandırma</Link></li>
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
                <span>Atatürk Cad. No:123, İstanbul</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                </svg>
                <span>+90 (212) 456 7890</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
                <span>info@pawsoft.com.tr</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} PawSoft. Tüm hakları saklıdır.
          </div>
          <div className={styles.footerExtra}>
            <div className={styles.createdBy}>
              ❤️ ile <a href="#" target="_blank" rel="noopener noreferrer">Geliştirilmiştir</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 