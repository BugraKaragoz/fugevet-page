'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';
import Link from 'next/link';
import Image from 'next/image';

const FAQ = () => {
  // Tüm soru/cevaplar için durum
  const [activeIndex, setActiveIndex] = useState(null);
  
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

  // Soru tıklama işlevi
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
            {/* Modern Vector Animasyonu */}
            <div className={styles.faqImageContainer}>
              <div className={styles.faqVector}>
                <motion.div 
                  className={styles.faqVectorBackground}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className={styles.pulse}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className={styles.faqVectorImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.chatBubblesContainer}>
                    {/* Ana büyük mavi konuşma balonu */}
                    <motion.div 
                      className={styles.chatBubble}
                      style={{ 
                        backgroundColor: '#4293fb',
                        width: '140px',
                        height: '110px',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        scale: { duration: 0.5, delay: 0.3 },
                        opacity: { duration: 0.5, delay: 0.3 },
                        y: { 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      <motion.span 
                        className={styles.bubbleQuestion}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >?</motion.span>
                    </motion.div>

                    {/* Pembe konuşma balonu */}
                    <motion.div 
                      className={styles.chatBubble}
                      style={{ 
                        backgroundColor: '#e94fa0',
                        width: '90px',
                        height: '80px',
                        left: '15%',
                        top: '30%'
                      }}
                      initial={{ scale: 0, opacity: 0, x: -20, y: -20 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        x: 0, 
                        y: [-20, -30, -20]
                      }}
                      transition={{ 
                        scale: { duration: 0.5, delay: 0.6 },
                        opacity: { duration: 0.5, delay: 0.6 },
                        x: { duration: 0.5, delay: 0.6 },
                        y: { 
                          duration: 4, 
                          delay: 0.6, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      <motion.span 
                        className={styles.bubbleQuestion}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      >?</motion.span>
                    </motion.div>

                    {/* Sağ üstteki mavi konuşma balonu */}
                    <motion.div 
                      className={styles.chatBubble}
                      style={{ 
                        backgroundColor: '#5a7efb',
                        width: '100px',
                        height: '70px',
                        right: '15%',
                        top: '20%',
                        borderRadius: '50%'
                      }}
                      initial={{ scale: 0, opacity: 0, x: 20, y: -20 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        x: 0, 
                        y: [-20, -35, -20] 
                      }}
                      transition={{ 
                        scale: { duration: 0.5, delay: 0.9 },
                        opacity: { duration: 0.5, delay: 0.9 },
                        x: { duration: 0.5, delay: 0.9 },
                        y: { 
                          duration: 5, 
                          delay: 0.9, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      <motion.span 
                        className={styles.bubbleQuestion}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.4 }}
                      >?</motion.span>
                    </motion.div>

                    {/* Turuncu konuşma balonu */}
                    <motion.div 
                      className={`${styles.chatBubble} ${styles.dotsBubble}`}
                      style={{ 
                        backgroundColor: '#ff9950',
                        width: '70px',
                        height: '70px',
                        right: '30%',
                        top: '10%',
                        borderRadius: '50%'
                      }}
                      initial={{ scale: 0, opacity: 0, y: -30 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        y: [-30, -45, -30],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ 
                        scale: { duration: 0.5, delay: 1.2 },
                        opacity: { duration: 0.5, delay: 1.2 },
                        y: { 
                          duration: 4.5, 
                          delay: 1.2, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        },
                        rotate: {
                          duration: 6,
                          delay: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.div className={styles.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </motion.div>
                    </motion.div>

                    {/* Pembe alt konuşma balonu */}
                    <motion.div 
                      className={`${styles.chatBubble} ${styles.dotsBubble}`}
                      style={{ 
                        backgroundColor: '#ffc2c2',
                        width: '80px',
                        height: '60px',
                        right: '15%',
                        bottom: '15%'
                      }}
                      initial={{ scale: 0, opacity: 0, x: 30, y: 30 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        x: 0, 
                        y: [30, 15, 30],
                        rotate: [0, -3, 0, 3, 0]
                      }}
                      transition={{ 
                        scale: { duration: 0.5, delay: 1.5 },
                        opacity: { duration: 0.5, delay: 1.5 },
                        x: { duration: 0.5, delay: 1.5 },
                        y: { 
                          duration: 4, 
                          delay: 1.5, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        },
                        rotate: {
                          duration: 7,
                          delay: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.div className={styles.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </motion.div>
                    </motion.div>

                    {/* Koyu mavi küçük konuşma balonu */}
                    <motion.div 
                      className={`${styles.chatBubble} ${styles.dotsBubble}`}
                      style={{ 
                        backgroundColor: '#2563eb',
                        width: '60px',
                        height: '60px',
                        left: '20%',
                        bottom: '20%',
                        borderRadius: '50%'
                      }}
                      initial={{ scale: 0, opacity: 0, x: -30, y: 30 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        x: 0, 
                        y: [30, 40, 30],
                        rotate: [0, 3, 0, -3, 0]
                      }}
                      transition={{ 
                        scale: { duration: 0.5, delay: 1.8 },
                        opacity: { duration: 0.5, delay: 1.8 },
                        x: { duration: 0.5, delay: 1.8 },
                        y: { 
                          duration: 3.5, 
                          delay: 1.8, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut" 
                        },
                        rotate: {
                          duration: 5,
                          delay: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.div className={styles.dots}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </motion.div>
                    </motion.div>

                    {/* Arka plan gradyanı */}
                    <div className={styles.vectorBackground}></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className={styles.faqRight}>
            <div className={styles.questionsContainer}>
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`${styles.questionItem} ${activeIndex === index ? styles.active : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div 
                    className={styles.questionHeader} 
                    onClick={() => toggleQuestion(index)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h3 className={styles.question}>{item.question}</h3>
                    <motion.div 
                      className={styles.arrowIcon}
                      animate={{ 
                        rotate: activeIndex === index ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                    className={styles.answerContainer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.3, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2 }
                          }
                    }}
                  >
                        <motion.div 
                          className={styles.answer}
                          initial={{ y: 10 }}
                          animate={{ y: 0 }}
                          exit={{ y: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.answer}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            <div className={styles.action}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link href="/contact" className={styles.ctaButton}>
                Diğer Sorularınız İçin Bize Ulaşın
              </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 