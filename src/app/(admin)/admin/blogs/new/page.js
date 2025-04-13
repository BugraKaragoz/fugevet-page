'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NewBlogPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    author: '',
    date: getTodayDate(),
    category: '',
    status: 'Taslak',
    coverImage: '',
    content: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Bugünün tarihini YYYY-MM-DD formatında al
  function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'title') {
      // Başlık değiştiğinde otomatik slug oluştur
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\sğüşıöç]/g, '')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/\s+/g, '-')
        .trim();
      setFormData({
        ...formData,
        title: value,
        slug
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (typeof window !== 'undefined') {
        // Mevcut blog verilerini al
        const storedBlogs = JSON.parse(localStorage.getItem('blogData') || '[]');
        
        // Yeni blog için ID oluştur
        const newId = (storedBlogs.length > 0) 
          ? String(Math.max(...storedBlogs.map(b => parseInt(b.id))) + 1) 
          : '1';
        
        // Yeni blogu ekle
        const newBlog = {
          ...formData,
          id: newId,
          // Tarih formatını dönüştür (gerçekte API bu işi yapar)
          date: new Date(formData.date).toISOString().split('T')[0]
        };
        
        const updatedBlogs = [...storedBlogs, newBlog];
        localStorage.setItem('blogData', JSON.stringify(updatedBlogs));
        
        // Blog listesine geri dön
        router.push('/admin/blogs');
      }
    } catch (err) {
      console.error('Kaydetme hatası:', err);
      setError('Blog kaydedilirken bir hata oluştu');
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Yeni Blog Ekle</h1>
        <button 
          onClick={() => router.push('/admin/blogs')}
          className="btn btn-secondary"
        >
          İptal
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 text-red-800 p-4 mb-6 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="form-group">
              <label htmlFor="title" className="form-label">Başlık</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="slug" className="form-label">Slug</label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="form-input"
                required
              />
              <small className="text-gray-500">Otomatik oluşturulur, düzenlenebilir.</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="author" className="form-label">Yazar</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="date" className="form-label">Tarih</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="status" className="form-label">Durum</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="Taslak">Taslak</option>
                  <option value="Yayında">Yayında</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="category" className="form-label">Kategori</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Kategori Seçin</option>
                <option value="Teknoloji">Teknoloji</option>
                <option value="Beslenme">Beslenme</option>
                <option value="Güvenlik">Güvenlik</option>
                <option value="Davranış">Davranış</option>
                <option value="Sağlık">Sağlık</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="coverImage" className="form-label">Kapak Görseli URL</label>
              <input
                type="url"
                id="coverImage"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                className="form-input"
                placeholder="https://placehold.co/800x500/0062cc/FFFFFF.webp?text=Blog+Görseli"
                required
              />
              {formData.coverImage && (
                <div className="mt-2 h-40 w-full relative">
                  <Image 
                    src={formData.coverImage}
                    alt="Kapak görseli önizleme"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div>
            <div className="form-group h-full">
              <label htmlFor="content" className="form-label">İçerik</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="form-input h-64 resize-none"
                placeholder="Blog içeriğini buraya yazın..."
                required
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Kaydediliyor...' : 'Blog Ekle'}
          </button>
        </div>
      </form>
    </div>
  );
} 