'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogStyles.module.css';

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null;
  
  return (
    <div className={styles.relatedPostsSection}>
      <h3 className={styles.relatedPostsTitle}>Benzer İçerikler</h3>
      
      <div className={styles.relatedPostsGrid}>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index} className={styles.relatedPostCard}>
            <div className={styles.relatedPostImageContainer}>
              <Image 
                src={post.coverImage} 
                alt={post.title}
                width={300}
                height={180}
                className={styles.relatedPostImage}
              />
            </div>
            <div className={styles.relatedPostContent}>
              <div className={styles.relatedPostCategory}>{post.category}</div>
              <h4 className={styles.relatedPostTitle}>{post.title}</h4>
              <p className={styles.relatedPostExcerpt}>{post.excerpt}</p>
              <div className={styles.relatedPostMeta}>
                <span className={styles.relatedPostDate}>
                  {new Date(post.date).toLocaleDateString('tr-TR', { 
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span className={styles.relatedPostReadMore}>Devamını Oku</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts; 