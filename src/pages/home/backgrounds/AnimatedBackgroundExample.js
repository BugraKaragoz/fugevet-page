'use client';
import AnimatedBackground from './AnimatedBackground';
import styles from './AnimatedBackgroundExample.module.css';

const AnimatedBackgroundExample = () => {
  return (
    <AnimatedBackground>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.gradientText}>Örnek</span> İçerik
        </h2>
        <div className={styles.titleLine}></div>
        <p className={styles.subtitle}>
          Bu bir örnek içeriktir. AnimatedBackground bileşeni ile birlikte kullanılabilir.
        </p>
        
        {/* Burada istediğiniz içeriği ekleyebilirsiniz */}
        <div className={styles.exampleBox}>
          <p>Bu bileşen, BlogSection bileşeninin arka plan ve animasyonlarını kullanır.</p>
          <p>İçerik alanına istediğiniz bileşenleri ekleyebilirsiniz.</p>
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default AnimatedBackgroundExample; 