'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy blog verisi
  const [blogs, setBlogs] = useState([
    {
      id: '1',
      title: 'Veteriner Kliniklerinde Dijital Dönüşüm ve Teknoloji Entegrasyonu',
      slug: 'veteriner-kliniklerinde-dijital-donusum',
      author: 'Dr. Ahmet Yılmaz',
      date: '2025-04-11',
      category: 'Teknoloji',
      status: 'Yayında',
      coverImage: 'https://placehold.co/800x500/0062cc/FFFFFF.webp?text=Dijital+Dönüşüm'
    },
    {
      id: '2',
      title: 'Veteriner Kliniklerinde Yapay Zeka Uygulamaları',
      slug: 'veteriner-kliniklerinde-yapay-zeka',
      author: 'Prof. Dr. Emine Kaya',
      date: '2025-03-28',
      category: 'Teknoloji',
      status: 'Yayında',
      coverImage: 'https://placehold.co/800x500/0095ff/FFFFFF.webp?text=Yapay+Zeka'
    },
    {
      id: '3',
      title: 'Mobil Veteriner Uygulamaları ve Uzaktan Sağlık Hizmetleri',
      slug: 'mobil-veteriner-uygulamalari',
      author: 'Dr. Mehmet Demir',
      date: '2025-02-15',
      category: 'Teknoloji',
      status: 'Yayında',
      coverImage: 'https://placehold.co/800x500/00b8d4/FFFFFF.webp?text=Mobil+Uygulamalar'
    },
    {
      id: '4',
      title: 'Veteriner Kliniklerinde Veri Güvenliği ve Gizlilik',
      slug: 'veri-guvenligi-veteriner-klinikleri',
      author: 'Özge Yıldız',
      date: '2025-01-20',
      category: 'Güvenlik',
      status: 'Taslak',
      coverImage: 'https://placehold.co/800x500/f44336/FFFFFF.webp?text=Veri+Güvenliği'
    },
    {
      id: '5',
      title: 'Kedi ve Köpeklerde Doğru Beslenme Rehberi',
      slug: 'kedi-kopek-beslenme',
      author: 'Dr. Ahmet Yılmaz',
      date: '2024-12-10',
      category: 'Beslenme',
      status: 'Yayında',
      coverImage: 'https://placehold.co/800x500/4caf50/FFFFFF.webp?text=Beslenme'
    },
    {
      id: '6',
      title: 'Evcil Hayvan Davranışlarını Anlamak',
      slug: 'evcil-hayvan-davranis',
      author: 'Prof. Dr. Emine Kaya',
      date: '2024-11-05',
      category: 'Davranış',
      status: 'Taslak',
      coverImage: 'https://placehold.co/800x500/9c27b0/FFFFFF.webp?text=Davranış'
    }
  ]);

  // Verileri localStorage'a kaydedelim ki düzenleme sayfasında kullanabilelim
  // Gerçek bir uygulamada bu veriler API'den gelir
  const saveToLocalStorage = (data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('blogData', JSON.stringify(data));
    }
  };

  // Component ilk yüklendiğinde verileri kaydet
  useState(() => {
    saveToLocalStorage(blogs);
  }, []);

  // Blog silme
  const handleDelete = (id) => {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      saveToLocalStorage(updatedBlogs);
    }
  };

  // Blog düzenleme
  const handleEdit = (id) => {
    router.push(`/admin/blogs/edit?id=${id}`);
  };

  // Yeni blog ekleme
  const handleAddNew = () => {
    router.push('/admin/blogs/new');
  };

  // Arama filtrelemesi
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tarih formatı
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Blog Yönetimi</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Blog ara..."
            className="form-input pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
        </div>
        
        <button 
          onClick={handleAddNew}
          className="btn btn-primary"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Yeni Blog Ekle
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-16">Görsel</th>
                <th>Başlık</th>
                <th>Yazar</th>
                <th>Kategori</th>
                <th>Tarih</th>
                <th>Durum</th>
                <th className="text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    <div className="h-10 w-16 relative">
                      <Image 
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="font-medium">{blog.title}</div>
                    <div className="text-xs text-gray-500">Slug: {blog.slug}</div>
                  </td>
                  <td>{blog.author}</td>
                  <td>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {blog.category}
                    </span>
                  </td>
                  <td>{formatDate(blog.date)}</td>
                  <td>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      blog.status === 'Yayında' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <button 
                      onClick={() => handleEdit(blog.id)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Düzenle
                    </button>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Aramanızla eşleşen blog yazısı bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
} 