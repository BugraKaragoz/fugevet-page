/**
 * Basit bir önbellek sistemi - görsel ve veri yüklemelerini hızlandırmak için
 */

// Önbellek nesnesi
const cache = new Map();

// Önbelleğe veri ekle
export function setCacheItem(key, value, ttl = 3600000) { // Varsayılan TTL 1 saat
  cache.set(key, {
    value,
    expiry: Date.now() + ttl
  });
}

// Önbellekten veri al
export function getCacheItem(key) {
  const item = cache.get(key);
  
  if (!item) return null;
  
  // Süre dolmuşsa önbellekten kaldır
  if (item.expiry < Date.now()) {
    cache.delete(key);
    return null;
  }
  
  return item.value;
}

// Önbelleği temizle
export function clearCache() {
  cache.clear();
}

// Belirli bir anahtarı önbellekten kaldır
export function removeCacheItem(key) {
  cache.delete(key);
}

// Async veri yükleme ile önbellek
export async function cachedFetch(url, options = {}, ttl = 3600000) {
  const cacheKey = `fetch:${url}`;
  const cachedData = getCacheItem(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }
  
  const response = await fetch(url, options);
  const data = await response.json();
  
  setCacheItem(cacheKey, data, ttl);
  return data;
} 