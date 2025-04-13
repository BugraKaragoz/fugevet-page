'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';

// Dummy blog yazıları
const blogPosts = [
  {
    slug: 'veteriner-kliniklerinde-dijital-donusum',
    title: 'Veteriner Kliniklerinde Dijital Dönüşüm ve Teknoloji Entegrasyonu',
    excerpt: 'Modern veteriner kliniklerinde dijital dönüşüm ve teknoloji entegrasyonunun önemi, yararları ve uygulama alanları hakkında kapsamlı bir inceleme.',
    coverImage: 'https://placehold.co/800x500/0062cc/FFFFFF.webp?text=Dijital+Dönüşüm',
    date: '2025-04-11',
    category: 'Teknoloji',
    author: {
      name: 'Dr. Ahmet Yılmaz',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=AY',
    }
  },
  {
    slug: 'veteriner-kliniklerinde-yapay-zeka',
    title: 'Veteriner Kliniklerinde Yapay Zeka Uygulamaları',
    excerpt: 'Yapay zeka teknolojilerinin veteriner hekimliğinde kullanım alanları ve faydaları hakkında detaylı bilgi.',
    coverImage: 'https://placehold.co/800x500/0095ff/FFFFFF.webp?text=Yapay+Zeka',
    date: '2025-03-28',
    category: 'Teknoloji',
    author: {
      name: 'Prof. Dr. Emine Kaya',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=EK',
    }
  },
  {
    slug: 'mobil-veteriner-uygulamalari',
    title: 'Mobil Veteriner Uygulamaları ve Uzaktan Sağlık Hizmetleri',
    excerpt: 'Mobil teknolojilerin veteriner hekimliğine getirdiği yenilikler ve uzaktan sağlık hizmetlerinin avantajları.',
    coverImage: 'https://placehold.co/800x500/00b8d4/FFFFFF.webp?text=Mobil+Uygulamalar',
    date: '2025-02-15',
    category: 'Teknoloji',
    author: {
      name: 'Dr. Mehmet Demir',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=MD',
    }
  },
  {
    slug: 'veri-guvenligi-veteriner-klinikleri',
    title: 'Veteriner Kliniklerinde Veri Güvenliği ve Gizlilik',
    excerpt: 'Dijital dönüşüm sürecinde veteriner kliniklerinin veri güvenliği ve gizlilik konusunda dikkat etmesi gereken hususlar.',
    coverImage: 'https://placehold.co/800x500/f44336/FFFFFF.webp?text=Veri+Güvenliği',
    date: '2025-01-20',
    category: 'Güvenlik',
    author: {
      name: 'Özge Yıldız',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=ÖY',
    }
  },
  {
    slug: 'kedi-kopek-beslenme',
    title: 'Kedi ve Köpeklerde Doğru Beslenme Rehberi',
    excerpt: 'Evcil hayvanlarınız için doğru beslenme alışkanlıkları ve sağlıklı diyetler hakkında bilmeniz gerekenler.',
    coverImage: 'https://placehold.co/800x500/4caf50/FFFFFF.webp?text=Beslenme',
    date: '2024-12-10',
    category: 'Beslenme',
    author: {
      name: 'Dr. Ahmet Yılmaz',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=AY',
    }
  },
  {
    slug: 'evcil-hayvan-davranis',
    title: 'Evcil Hayvan Davranışlarını Anlamak',
    excerpt: 'Evcil hayvanlarınızın davranışlarını anlamanın önemi ve sık görülen davranış problemlerinin çözümleri.',
    coverImage: 'https://placehold.co/800x500/9c27b0/FFFFFF.webp?text=Davranış',
    date: '2024-11-05',
    category: 'Davranış',
    author: {
      name: 'Prof. Dr. Emine Kaya',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=EK',
    }
  }
];

// Kategoriler
const categories = [
  'Tümü',
  'Teknoloji',
  'Güvenlik',
  'Beslenme',
  'Davranış'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  
  // Filtreleme işlemi
  const filteredPosts = selectedCategory === 'Tümü' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <div className={styles.blogPage}>
      <div className={styles.blogPageBackground} />
      
      <div className={styles.blogHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>FugeVet Blog</h1>
          <p className={styles.heroSubtitle}>Veteriner dünyasındaki son gelişmeler, teknolojiler ve pet bakımı hakkında bilgiler</p>
        </div>
      </div>
      
      <div className={styles.blogContainer}>
        <div className={styles.categoryFilter}>
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className={styles.blogGrid}>
          {filteredPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className={styles.blogCard}>
              <div className={styles.blogImageContainer}>
                <Image 
                  src={post.coverImage} 
                  alt={post.title}
                  width={400}
                  height={250}
                  className={styles.blogImage}
                />
                <div className={styles.blogCategory}>{post.category}</div>
              </div>
              <div className={styles.blogContent}>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.blogMeta}>
                  <div className={styles.authorInfo}>
                    <Image 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      width={30}
                      height={30}
                      className={styles.authorAvatar}
                    />
                    <span className={styles.authorName}>{post.author.name}</span>
                  </div>
                  <div className={styles.blogDate}>
                    {new Date(post.date).toLocaleDateString('tr-TR', { 
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 