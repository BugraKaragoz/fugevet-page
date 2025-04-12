'use client';

import React, { useState } from 'react';
import styles from './TrialForm.module.css';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { FaCloud, FaPhone, FaUserMd, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TrialForm = () => {
  const [name, setName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      // Burada API çağrısı yapılacak - şimdilik simülasyon yapıyoruz
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Demo talebi gönderildi:', { name, clinicName, phone });
      setSubmitted(true);
      // Form başarıyla gönderildi
    } catch (err) {
      console.error('Form gönderimi başarısız:', err);
      setError('Formunuzu gönderirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>FugeVet Avantajları</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <FaUserMd className={styles.featureIcon} />
            </div>
            <h3>Veteriner Hekimlere Özel</h3>
            <p>Hasta takibi, tedavi planları, takvim yönetimi ve gelişmiş raporlama özellikleriyle pratiğinizi güçlendirin.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <FaCloud className={styles.featureIcon} />
            </div>
            <h3>Bulut Tabanlı Yazılım</h3>
            <p>Verileriniz güvenle saklanır ve tüm cihazlarınızdan erişebilirsiniz. İnternet olan her yerden kullanım.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <FaPhone className={styles.featureIcon} />
            </div>
            <h3>7/24 Destek</h3>
            <p>Teknik destek ekibimiz telefon ve WhatsApp üzerinden sorularınızı yanıtlamak için her zaman hazır.</p>
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        {!submitted ? (
          <>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>FugeVet</h2>
              <h1 className={styles.formSubtitle}>Demo Talebi</h1>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.formInput}
                  placeholder="Ad ve soyadınızı girin"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="clinicName" className={styles.formLabel}>Klinik / İşletme Adı</label>
                <input
                  type="text"
                  id="clinicName"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className={styles.formInput}
                  placeholder="XYZ Veteriner Kliniği"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={styles.formInput}
                  placeholder="Telefon numaranızı girin"
                  required
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitButton} ${submitting ? styles.submitting : ''}`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    Gönderiliyor...
                  </>
                ) : (
                  'Demo Talep Et'
                )}
              </button>
              {error && <div className={styles.errorMessage}>{error}</div>}
            </form>
            <div className={styles.formFooter}>
              <p className={styles.formNote}>
                Demo talebiniz sonrası ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </p>
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.linkedin.com/company/fugevet/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedinIn className={styles.socialIcon} />
                </a>
                <a 
                  href="https://www.instagram.com/fugevet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.successMessage}>
            <FaCheckCircle className={styles.successIcon} />
            <h2>Talebiniz Alındı!</h2>
            <p>Demo talebiniz başarıyla alınmıştır. En kısa sürede uzmanlarımız sizinle iletişime geçecektir.</p>
            <button
              className={styles.newRequestButton}
              onClick={() => {
                setName('');
                setClinicName('');
                setPhone('');
                setError('');
                setSubmitted(false);
              }}
            >
              Yeni Talep Oluştur
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrialForm; 