import { useState, useEffect, memo } from 'react';
import { getCacheItem, setCacheItem } from '@/utils/cache';

/**
 * Optimize edilmiş SVG bileşeni
 * - Önbelleğe alma
 * - Lazy loading
 * - Memoization
 */
const OptimizedSVG = memo(function OptimizedSVG({
  svg,
  width,
  height,
  className = '',
  role = 'img',
  ...props
}) {
  const [svgContent, setSvgContent] = useState('');
  
  useEffect(() => {
    if (!svg) return;
    
    const loadSVG = async () => {
      // Önbellekten kontrol et
      const cachedSVG = getCacheItem(`svg:${svg}`);
      if (cachedSVG) {
        setSvgContent(cachedSVG);
        return;
      }
      
      // İçe aktarılan SVG bileşeni
      if (typeof svg === 'function') {
        const SVGComponent = svg;
        setSvgContent(<SVGComponent />);
        return;
      }
      
      // String olarak SVG içeriği
      if (svg.startsWith('<svg')) {
        setSvgContent(svg);
        setCacheItem(`svg:${svg}`, svg);
        return;
      }
      
      // SVG URL'i
      try {
        const res = await fetch(svg);
        const text = await res.text();
        setSvgContent(text);
        setCacheItem(`svg:${svg}`, text, 24 * 60 * 60 * 1000); // 24 saat
      } catch (error) {
        console.error('SVG yüklenirken hata oluştu:', error);
      }
    };
    
    loadSVG();
  }, [svg]);
  
  // SVG içeriği yoksa bir placedholder göster
  if (!svgContent) {
    return (
      <div 
        className={`bg-gray-100 animate-pulse rounded ${className}`}
        style={{ width: width || 24, height: height || 24 }}
        role="img"
        aria-label="Loading SVG"
      />
    );
  }
  
  // SVG içeriği doğrudan bir React bileşeni ise
  if (typeof svgContent === 'object') {
    return svgContent;
  }
  
  // SVG içeriği string ise
  return (
    <div
      className={className}
      style={{ width, height }}
      role={role}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}
    />
  );
});

export default OptimizedSVG; 