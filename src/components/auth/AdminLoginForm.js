'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css'; // Reusing existing styles

const AdminLoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
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
      
      // Örnek admin giriş kontrolü - DUMMY DATA
      if (formData.username === 'admin' && formData.password === 'admin123') {
        // Başarılı giriş
        console.log('Admin girişi başarılı:', formData);
        // Admin Panel bileşenini doğrudan göster
        router.push('/admin-panel');
      } else {
        setError('Geçersiz kullanıcı adı veya şifre.');
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
          <h1 className={styles.formTitle}>Yönetici Girişi</h1>
          <p className={styles.formSubtitle}>
            Yönetici hesabınızla giriş yaparak sistemi yönetin
          </p>
        </div>
        
        {error && <div className={styles.errorMessage}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.formLabel}>Kullanıcı Adı</label>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="admin"
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
          <div className={styles.supportLink}>
            <Link href="/">Ana Sayfaya Dön</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.sideImage}>
        <div className={styles.overlay}>
          <h2 className={styles.overlayTitle}>FugeVet Yönetici Paneli</h2>
          <p className={styles.overlayText}>
            FugeVet sistemini kontrol etmek için yönetici paneline erişin
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm; 