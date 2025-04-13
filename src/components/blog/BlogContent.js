'use client';

import Image from 'next/image';
import styles from './BlogStyles.module.css';

const BlogContent = ({ content, images }) => {
  // İçerik metnini paragraflara bölelim
  const paragraphs = content.split('\n\n');
  
  // Görsel eklemek için içeriğin yaklaşık olarak ortasındaki paragrafı buluyoruz
  const middleIndex = Math.floor(paragraphs.length / 2);
  
  return (
    <div className={styles.blogContent}>
      <div className={styles.contentWrapper}>
        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className={styles.paragraph}>{paragraph}</p>
            
            {/* Paragrafların arasına görsel ekle */}
            {images && images.length > 0 && index === middleIndex && (
              <div className={styles.contentImageContainer}>
                <Image 
                  src={images[0].src}
                  alt={images[0].alt || 'Blog görseli'}
                  width={800}
                  height={450}
                  className={styles.contentImage}
                />
                {images[0].caption && (
                  <p className={styles.imageCaption}>{images[0].caption}</p>
                )}
              </div>
            )}
            
            {/* Son paragraftan sonra ikinci görseli ekle (eğer varsa) */}
            {images && images.length > 1 && index === paragraphs.length - 1 && (
              <div className={styles.contentImageContainer}>
                <Image 
                  src={images[1].src}
                  alt={images[1].alt || 'Blog görseli'}
                  width={800}
                  height={450}
                  className={styles.contentImage}
                />
                {images[1].caption && (
                  <p className={styles.imageCaption}>{images[1].caption}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent; 