'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simüle edilmiş giriş işlemi
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Örnek giriş kontrolü
      if (formData.email && formData.password) {
        // Başarılı giriş - gerçek uygulamada burası API ile entegre edilecek
        console.log('Giriş başarılı:', formData);
        // Yönlendirme eklenecek
        window.location.href = '/dashboard';
      } else {
        setError('Lütfen tüm alanları doldurunuz.');
      }
    } catch (err) {
      setError('Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyiniz.');
      console.error('Giriş hatası:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.logoContainer}>
          <Image 
            src="/assets/Varlık 7.png" 
            alt="FugeVet Logo" 
            width={180} 
            height={60}
            className={styles.logo}
          />
        </div>
        
        <div className={styles.formHeader}>
          <h1 className={styles.formTitle}>Veteriner Hekim Girişi</h1>
          <p className={styles.formSubtitle}>
            Hesabınıza giriş yaparak kliniğinizi yönetmeye devam edin
          </p>
        </div>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>E-posta</label>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ornek@klinik.com"
                className={styles.formInput}
                required
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>Şifre</label>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z" fill="currentColor"/>
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={styles.formInput}
                required
              />
            </div>
          </div>
          
          <div className={styles.formOptions}>
            <div className={styles.rememberMe}>
              <input 
                type="checkbox" 
                id="rememberMe" 
                name="rememberMe" 
                checked={formData.rememberMe}
                onChange={handleChange}
                className={styles.checkbox}
              />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>Beni hatırla</label>
            </div>
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Şifremi unuttum
            </Link>
          </div>
          
          <button 
            type="submit" 
            className={`${styles.loginButton} ${isLoading ? styles.loading : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className={styles.spinner}></div>
            ) : 'Giriş Yap'}
          </button>
        </form>
        
        <div className={styles.formFooter}>
          <p>
            Hesabınız yok mu? <Link href="/register" className={styles.registerLink}>Demo talebinde bulunun</Link>
          </p>
          <div className={styles.supportLink}>
            Sorun mu yaşıyorsunuz? <Link href="/contact">Destek ekibimizle iletişime geçin</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.sideImage}>
        <div className={styles.overlay}>
          <h2 className={styles.overlayTitle}>FugeVet Veteriner Klinik Yazılımı</h2>
          <p className={styles.overlayText}>
            Kliniğinizi daha verimli yönetmek için tasarlanmış modern çözüm
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; 