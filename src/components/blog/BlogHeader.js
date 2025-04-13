'use client';

import Image from 'next/image';
import styles from './BlogStyles.module.css';

const BlogHeader = ({ title, coverImage, author, date, category }) => {
  return (
    <div className={styles.blogHeader}>
      <div className={styles.coverImageContainer}>
        <Image 
          src={coverImage} 
          alt={title}
          width={1200}
          height={600}
          className={styles.coverImage}
          priority
        />
        <div className={styles.imageOverlay}></div>
      </div>
      
      <div className={styles.headerContent}>
        <div className={styles.category}>{category}</div>
        <h1 className={styles.blogTitle}>{title}</h1>
        
        <div className={styles.blogMeta}>
          <div className={styles.authorInfo}>
            <Image 
              src={author.avatar || '/assets/blog/default-avatar.jpg'} 
              alt={author.name}
              width={40}
              height={40}
              className={styles.authorAvatar}
            />
            <span className={styles.authorName}>{author.name}</span>
          </div>
          <div className={styles.blogDate}>
            <span>{new Date(date).toLocaleDateString('tr-TR', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader; 