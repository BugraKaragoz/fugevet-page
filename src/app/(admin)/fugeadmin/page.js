'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import '../../admin.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side only code
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Demo giriş için basit kontrol
    if (username === 'admin' && password === 'fuge123') {
      // Başarılı giriş
      router.push('/admin/dashboard');
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
      setLoading(false);
    }
  };

  if (!mounted) {
    return <div className="login-container">Yükleniyor...</div>;
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-logo">
          <Image 
            src="/assets/Varlık 7.png"
            alt="FugeVet Logo" 
            width={180} 
            height={60}
            priority
          />
        </div>
        <h1 className="login-title">Yönetici Girişi</h1>
        
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Şifre</label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1rem' }}
            disabled={loading}
          >
            {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
} 