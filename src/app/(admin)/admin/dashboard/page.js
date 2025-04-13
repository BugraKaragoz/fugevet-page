'use client';

import { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Chart.js bileşenlerini kaydet
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

export default function DashboardPage() {
  // Demo veriler
  const stats = [
    { id: 1, title: 'Toplam Ürün', value: '324', icon: 'box', color: 'bg-blue-100 text-blue-600', trend: '+8% bu ay' },
    { id: 2, title: 'Toplam Kullanıcı', value: '876', icon: 'users', color: 'bg-green-100 text-green-600', trend: '+12% bu ay' },
    { id: 3, title: 'Toplam Sipariş', value: '1245', icon: 'shopping-bag', color: 'bg-purple-100 text-purple-600', trend: '+5% bu ay' },
    { id: 4, title: 'Toplam Gelir', value: '₺42,650', icon: 'dollar-sign', color: 'bg-yellow-100 text-yellow-600', trend: '+15% bu ay' },
  ];

  const recentActivities = [
    { id: 1, title: 'Yeni ürün eklendi', user: 'admin', time: '15 dakika önce' },
    { id: 2, title: 'Kullanıcı güncellendi', user: 'admin', time: '45 dakika önce' },
    { id: 3, title: 'Fiyat ayarlaması yapıldı', user: 'admin', time: '2 saat önce' },
    { id: 4, title: 'Yeni blog yazısı', user: 'admin', time: '5 saat önce' },
    { id: 5, title: 'Sistem güncellemesi', user: 'admin', time: '1 gün önce' },
  ];

  // Cookie istatistikleri
  const [cookieStats, setCookieStats] = useState({
    acceptedCount: 0,
    rejectedCount: 0,
    customizedCount: 0,
    totalVisitors: 0
  });

  // Bu fonksiyon gerçek veriler için API'den veri çekmek için kullanılabilir
  useEffect(() => {
    // Simüle edilmiş veri
    setCookieStats({
      acceptedCount: 785,
      rejectedCount: 120,
      customizedCount: 230,
      totalVisitors: 1135
    });
  }, []);

  // Grafik verileri
  const lineChartData = {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
    datasets: [
      {
        label: 'Ziyaretçi Sayısı',
        data: [1200, 1900, 3000, 5000, 4000, 6500],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const barChartData = {
    labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
    datasets: [
      {
        label: 'Günlük Kullanıcı',
        data: [65, 59, 80, 81, 56, 40, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Kabul Edildi', 'Reddedildi', 'Özelleştirildi'],
    datasets: [
      {
        data: [cookieStats.acceptedCount, cookieStats.rejectedCount, cookieStats.customizedCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'box':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'shopping-bag':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'dollar-sign':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      {/* İstatistikler */}
      <div className="stats-container">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className={`stat-card-icon ${stat.color}`}>
              {getIcon(stat.icon)}
            </div>
            <div className="stat-card-title">{stat.title}</div>
            <div className="stat-card-value">{stat.value}</div>
            <div className="stat-card-trend">{stat.trend}</div>
          </div>
        ))}
      </div>
      
      {/* Grafikler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Ziyaretçi İstatistikleri</h2>
          <div className="h-64">
            <Line 
              data={lineChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Aylık Ziyaretçi Grafiği'
                  },
                }
              }}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Haftalık Kullanıcı Trafiği</h2>
          <div className="h-64">
            <Bar 
              data={barChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Günlük Kullanıcı Sayısı'
                  },
                }
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Cookie İstatistikleri & Son Aktiviteler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Cookie İstatistikleri</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Toplam Ziyaretçi</p>
              <p className="text-2xl font-bold">{cookieStats.totalVisitors}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Kabul Oranı</p>
              <p className="text-2xl font-bold">
                {Math.round((cookieStats.acceptedCount / cookieStats.totalVisitors) * 100)}%
              </p>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="w-3/4 h-full">
              <Doughnut 
                data={doughnutChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                    title: {
                      display: true,
                      text: 'Cookie Tercihleri'
                    },
                  }
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Son Aktiviteler</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start">
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3"></div>
                <div>
                  <div className="font-medium">{activity.title}</div>
                  <div className="text-sm text-gray-500">
                    <span>{activity.user}</span> • <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hızlı İşlemler */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Yeni Ürün Ekle
          </button>
          <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Kullanıcı Ekle
          </button>
          <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Rapor Oluştur
          </button>
          <button className="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Cookie Ayarları
          </button>
        </div>
      </div>
    </div>
  );
} 