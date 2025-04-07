'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FAQ.module.css';
import Link from 'next/link';

const FAQ = () => {
  // Tüm soru/cevaplar için durum
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoreInfoActive, setIsMoreInfoActive] = useState(false);
  const [heights, setHeights] = useState({});
  const answerRefs = useRef([]);

  // Soru ve cevaplar
  const faqItems = [
    {
      question: 'Fugevet nedir?',
      answer: 'Fugevet, veteriner klinikleri için özel olarak geliştirilmiş, bulut tabanlı bir klinik yönetim yazılımıdır. Hasta kayıtları, randevu yönetimi, aşı takibi, reçete yönetimi ve faturalama gibi tüm klinik süreçlerinizi tek bir platformdan yönetmenizi sağlar.'
    },
    {
      question: 'Verilerim ne kadar güvenli?',
      answer: 'Fugevet, en son güvenlik teknolojileri kullanılarak geliştirilmiştir. Tüm verileriniz SSL şifreleme ile korunur, düzenli yedeklenir ve KVKK ile uyumlu olarak saklanır. Verilerinize sadece sizin yetkilendirdiğiniz kişiler erişebilir.'
    },
    {
      question: 'Kullanmak için eğitim almamız gerekiyor mu?',
      answer: 'Fugevet kullanıcı dostu arayüzü sayesinde kolayca öğrenilebilir. Bununla birlikte, ücretsiz detaylı eğitim videoları, canlı destek ve başlangıç rehberleri sunuyoruz. Ayrıca isteğe bağlı olarak online veya yerinde eğitim hizmetlerimiz de bulunmaktadır.'
    },
    {
      question: 'Çevrimdışı kullanabilir miyim?',
      answer: 'Fugevet temel olarak bulut tabanlı çalışmaktadır, ancak sınırlı internet bağlantısı olan ortamlar için geliştirdiğimiz çevrimdışı mod ile temel işlemleri gerçekleştirebilirsiniz. İnternet bağlantısı sağlandığında veriler otomatik olarak senkronize edilecektir.'
    }
  ];

  // İlk yüklemede yükseklikleri hesapla
  useEffect(() => {
    const newHeights = {};
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
    
    // İlk soruyu açık göster
    setActiveIndex(0);
  }, []);

  // Soru tıklama işlevi
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Daha fazla bilgi tıklama işlevi
  const toggleMoreInfo = () => {
    // Eğer herhangi bir soru açıksa, önce onu kapat
    if (activeIndex !== null) {
      setActiveIndex(null);
      setTimeout(() => {
        setIsMoreInfoActive(!isMoreInfoActive);
      }, 50);
    } else {
      setIsMoreInfoActive(!isMoreInfoActive);
    }
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Sıkça Sorulan Sorular</h2>
          <div className={styles.faqTitleLine}></div>
        </div>
        
        <div className={styles.faqContent}>
          <div className={styles.faqLeft}>
            {/* Modern ve animasyonlu SSS vektör görseli */}
            <div className={styles.faqImage}>
              <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arka plan dairesi */}
                <circle cx="200" cy="300" r="150" fill="#F5F7FF" />
                
                {/* Dekoratif elementler - daireler */}
                <circle cx="100" cy="480" r="50" fill="#E3F2FD" opacity="0.7">
                  <animate attributeName="r" values="50;55;50" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="120" r="60" fill="#E3F2FD" opacity="0.7">
                  <animate attributeName="r" values="60;68;60" dur="7s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="350" r="35" fill="#E1BEE7" opacity="0.5">
                  <animate attributeName="r" values="35;40;35" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="120" cy="180" r="25" fill="#E1BEE7" opacity="0.5">
                  <animate attributeName="r" values="25;30;25" dur="9s" repeatCount="indefinite" />
                </circle>
                
                {/* Nokta deseni - animasyonlu */}
                <g opacity="0.7">
                  <circle cx="160" cy="120" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="110" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="170" cy="130" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.5;0.7" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="140" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="110" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="165" cy="100" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.5;0.7" dur="5s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="130" cy="450" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="470" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="170" cy="455" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.5;0.7" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="140" cy="435" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="160" cy="485" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="465" r="2" fill="#8C69FF">
                    <animate attributeName="opacity" values="0.7;0.5;0.7" dur="5s" repeatCount="indefinite" />
                  </circle>
                </g>
                
                {/* Ana soru işaretleri - animasyonlu */}
                <g>
                  <circle cx="180" cy="230" r="60" fill="url(#circleGradient1)">
                    <animate attributeName="transform" attributeType="XML" 
                      type="translate" values="0,0; 0,-10; 0,0" 
                      dur="6s" repeatCount="indefinite" />
                  </circle>
                  <text x="162" y="260" fontSize="75" fontWeight="700" fill="white">?</text>
                </g>
                
                <g>
                  <circle cx="280" cy="320" r="45" fill="url(#circleGradient2)">
                    <animate attributeName="transform" attributeType="XML" 
                      type="translate" values="0,0; 0,-8; 0,0" 
                      dur="7s" repeatCount="indefinite" />
                  </circle>
                  <text x="267" y="340" fontSize="55" fontWeight="700" fill="white">?</text>
                </g>
                
                <g>
                  <circle cx="160" cy="400" r="35" fill="url(#circleGradient3)">
                    <animate attributeName="transform" attributeType="XML" 
                      type="translate" values="0,0; 0,-6; 0,0" 
                      dur="5s" repeatCount="indefinite" />
                  </circle>
                  <text x="150" y="415" fontSize="42" fontWeight="700" fill="white">?</text>
                </g>
                
                {/* Küçük soru işareti */}
                <g>
                  <circle cx="250" cy="160" r="25" fill="url(#circleGradient4)">
                    <animate attributeName="transform" attributeType="XML" 
                      type="translate" values="0,0; 0,-5; 0,0" 
                      dur="4s" repeatCount="indefinite" />
                  </circle>
                  <text x="242" y="172" fontSize="30" fontWeight="700" fill="white">?</text>
                </g>
                
                {/* Dekoratif çizgiler - animasyonlu */}
                <path d="M270 100 C300 80, 330 80, 350 100" stroke="#8C69FF" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="d" 
                    values="M270 100 C300 80, 330 80, 350 100; M270 105 C300 85, 330 85, 350 105; M270 100 C300 80, 330 80, 350 100" 
                    dur="8s" repeatCount="indefinite" />
                </path>
                
                <path d="M330 200 C350 220, 360 240, 370 270" stroke="#8C69FF" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="d" 
                    values="M330 200 C350 220, 360 240, 370 270; M325 205 C345 225, 355 245, 365 275; M330 200 C350 220, 360 240, 370 270" 
                    dur="7s" repeatCount="indefinite" />
                </path>
                
                <path d="M300 440 C320 460, 340 460, 360 440" stroke="#8C69FF" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="d" 
                    values="M300 440 C320 460, 340 460, 360 440; M300 445 C320 465, 340 465, 360 445; M300 440 C320 460, 340 460, 360 440" 
                    dur="9s" repeatCount="indefinite" />
                </path>
                
                <path d="M70 300 C90 320, 110 330, 130 310" stroke="#8C69FF" strokeWidth="3" strokeLinecap="round">
                  <animate attributeName="d" 
                    values="M70 300 C90 320, 110 330, 130 310; M70 305 C90 325, 110 335, 130 315; M70 300 C90 320, 110 330, 130 310" 
                    dur="6s" repeatCount="indefinite" />
                </path>
                
                {/* Dairesel bağlantı/yörünge çizgisi */}
                <circle cx="200" cy="300" r="180" stroke="#8C69FF" strokeWidth="2" strokeDasharray="15 10" fill="none" opacity="0.4">
                  <animateTransform 
                    attributeName="transform" 
                    type="rotate" 
                    from="0 200 300" 
                    to="360 200 300" 
                    dur="40s" 
                    repeatCount="indefinite" />
                </circle>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="circleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3F51B5" />
                    <stop offset="100%" stopColor="#5C6BC0" />
                  </linearGradient>
                  <linearGradient id="circleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2979FF" />
                    <stop offset="100%" stopColor="#7C4DFF" />
                  </linearGradient>
                  <linearGradient id="circleGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#673AB7" />
                    <stop offset="100%" stopColor="#9575CD" />
                  </linearGradient>
                  <linearGradient id="circleGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF5722" />
                    <stop offset="100%" stopColor="#FF9800" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className={styles.faqRight}>
            <div className={styles.faqAccordion}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <button 
                    className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={activeIndex === index}
                  >
                    {item.question}
                    <span className={styles.arrowIcon}>
                      <div className={styles.plusIcon}></div>
                    </span>
                  </button>
                  <div 
                    className={`${styles.faqAnswer} ${activeIndex === index ? styles.show : ''}`}
                    ref={el => answerRefs.current[index] = el}
                    style={{
                      maxHeight: activeIndex === index ? `${heights[index]}px` : '0'
                    }}
                    aria-hidden={activeIndex !== index}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
              
              {/* Daha fazla soru kartı */}
              <div className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${isMoreInfoActive ? styles.active : ''}`}
                  onClick={toggleMoreInfo}
                >
                  Daha fazla sorunuz mu var?
                  <span className={styles.arrowIcon}>
                    {isMoreInfoActive ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 15L12 8L5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 9L12 16L19 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${isMoreInfoActive ? styles.show : ''}`}>
                  <Link href="/sikca-sorulan-sorular" className={styles.moreInfoLink}>
                    Tüm SSS için tıklayın
                    <svg className={styles.arrowRight} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 