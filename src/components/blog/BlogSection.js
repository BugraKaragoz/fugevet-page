'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './BlogSection.module.css';
import Image from 'next/image';

const BlogSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Blog verileri
  const blogPosts = [
    {
      id: 1,
      title: 'Köpeklerde Sağlıklı Beslenme',
      excerpt: 'Köpeğiniz için en uygun beslenme rutinini nasıl oluşturabilirsiniz? Uzman veterinerlerimizden öneriler...',
      category: 'Köpekler',
      date: '15 Nis 2023',
      image: '/images/blog/dog.svg',
      alt: 'Köpek maması ve sağlıklı köpek'
    },
    {
      id: 2,
      title: 'Kedilerde Görülen Yaygın Hastalıklar',
      excerpt: 'Kedilerde sık görülen sağlık problemleri ve erken teşhisin önemi hakkında bilmeniz gerekenler...',
      category: 'Kediler',
      date: '10 Nis 2023',
      image: '/images/blog/cat.svg',
      alt: 'Veteriner kontrolündeki kedi'
    },
    {
      id: 3,
      title: 'Evcil Hayvanlar İçin Ev Ortamını Güvenli Hale Getirme',
      excerpt: 'Evinizi pet dostlarınız için nasıl daha güvenli ve konforlu hale getirebilirsiniz?',
      category: 'Genel',
      date: '5 Nis 2023',
      image: '/images/blog/home.svg',
      alt: 'Güvenli bir ev ortamındaki evcil hayvan'
    },
    {
      id: 4,
      title: 'Köpeklerde Diş Sağlığı ve Bakımı',
      excerpt: 'Köpeğinizin diş sağlığını korumak için yapmanız gerekenler ve düzenli bakımın önemi...',
      category: 'Köpekler',
      date: '1 Nis 2023',
      image: '/images/blog/dog.svg',
      alt: 'Köpek diş bakımı'
    },
    {
      id: 5,
      title: 'Evcil Kuşlarda Beslenme ve Bakım',
      excerpt: 'Evcil kuşların sağlığı için doğru beslenme, kafes düzeni ve dikkat edilmesi gerekenler...',
      category: 'Kuşlar',
      date: '28 Mar 2023',
      image: '/images/blog/placeholder.svg',
      alt: 'Kafesindeki renkli papağan'
    }
  ];

  // Ekran boyutuna göre görünecek kart sayısını ayarla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slider'ı ileri veya geri hareket ettirme fonksiyonu
  const moveSlider = (direction) => {
    const totalSlides = blogPosts.length;
    
    if (direction === 'next') {
      setActiveSlide((prev) => (prev === totalSlides - visibleSlides ? 0 : prev + 1));
    } else {
      setActiveSlide((prev) => (prev === 0 ? totalSlides - visibleSlides : prev - 1));
    }
  };

  // Otomatik oynatma için useEffect
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      moveSlider('next');
    }, 5000); // 5 saniyede bir otomatik geçiş

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeSlide, visibleSlides]);

  // Slider'ı hareket ettirme
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 320 + 30; // card width + gap
      const translateX = -activeSlide * cardWidth;
      sliderRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [activeSlide]);

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <h2 className={styles.blogTitle}>
            <span className={styles.gradientText}>Pet</span> Bloğumuz
          </h2>
          <div className={styles.blogTitleLine}></div>
          <p className={styles.blogSubtitle}>Evcil hayvanınızın sağlığı ve mutluluğu için uzman veterinerlerimizden öneriler</p>
        </div>

        {/* Dekoratif elementler */}
        <div className={styles.decorDot}></div>
        <div className={styles.decorCircle}></div>
        <div className={styles.decorPaw}></div>
        
        {/* Blog slider */}
        <div className={styles.blogSliderContainer}>
          <button 
            className={`${styles.sliderButton} ${styles.prevButton}`}
            onClick={() => moveSlider('prev')}
            aria-label="Önceki blog yazısı"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.blogSliderWrapper}>
            <div className={styles.blogSlider} ref={sliderRef}>
              {blogPosts.map((post) => (
                <div className={styles.blogCard} key={post.id}>
                  <div className={styles.blogImageContainer}>
                    <div className={styles.blogImage}>
                      <Image 
                        src={post.image} 
                        alt={post.alt} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                    <div className={styles.blogCategory}>{post.category}</div>
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.blogDate}>{post.date}</div>
                    <h3 className={styles.blogCardTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className={styles.readMoreLink}>
                      Devamını Oku
                      <svg className={styles.arrowRight} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.sliderButton} ${styles.nextButton}`}
            onClick={() => moveSlider('next')}
            aria-label="Sonraki blog yazısı"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Slider pagination dots */}
        <div className={styles.sliderPagination}>
          {Array.from({ length: blogPosts.length - visibleSlides + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.paginationDot} ${activeSlide === index ? styles.activeDot : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Blog yazısı ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Tüm blog yazılarına git butonu */}
        <div className={styles.viewAllContainer}>
          <Link href="/blog" className={styles.viewAllButton}>
            Tüm Blog Yazılarını Görüntüle
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 5L15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;