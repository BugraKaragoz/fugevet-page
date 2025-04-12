import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCacheItem, setCacheItem } from '@/utils/cache';

/**
 * Optimize edilmiş görüntü bileşeni
 * - Lazy loading
 * - Önbelleğe alma
 * - Görüntü boyutlandırma
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  // Görüntü yükleme işlemi
  useEffect(() => {
    // Önbellekte görüntü var mı?
    const cachedSrc = getCacheItem(`img:${src}`);
    if (cachedSrc) {
      setImgSrc(cachedSrc);
      setIsLoaded(true);
      return;
    }

    // Önbellekte yoksa yükle
    setImgSrc(src);
    
    // Önbelleğe al (10 dakika TTL)
    setCacheItem(`img:${src}`, src, 10 * 60 * 1000);
  }, [src]);

  // Görüntü henüz yüklenmediyse, bir yükleniyor göstergesi göster
  if (!imgSrc && !priority) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse rounded overflow-hidden ${className}`}
        style={{ width: width || '100%', height: height || 300 }}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imgSrc || src}
        alt={alt || 'Image'}
        width={width}
        height={height}
        quality={80}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
} 