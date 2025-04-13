'use client';

import styles from './BlogStyles.module.css';

const BlogReferences = ({ references }) => {
  if (!references || references.length === 0) return null;
  
  return (
    <div className={styles.referencesSection}>
      <h3 className={styles.referencesTitle}>Kaynakça</h3>
      <ul className={styles.referencesList}>
        {references.map((reference, index) => (
          <li key={index} className={styles.referenceItem}>
            {reference.author && <span className={styles.referenceAuthor}>{reference.author}. </span>}
            {reference.title && (
              <span className={styles.referenceTitle}>
                {reference.url ? (
                  <a href={reference.url} target="_blank" rel="noopener noreferrer">
                    {reference.title}
                  </a>
                ) : (
                  reference.title
                )}
              </span>
            )}
            {reference.publisher && <span className={styles.referencePublisher}>, {reference.publisher}</span>}
            {reference.year && <span className={styles.referenceYear}>, {reference.year}</span>}
            {reference.pages && <span className={styles.referencePages}>, s. {reference.pages}</span>}
            {reference.note && <span className={styles.referenceNote}> ({reference.note})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogReferences; 