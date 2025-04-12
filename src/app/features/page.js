import AnimatedBackground from '@/components/home/AnimatedBackground';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import AdditionalFeatures from '@/components/features/AdditionalFeatures';

export const metadata = {
  title: 'Özellikler - FugeVet Veteriner Yönetim Yazılımı',
  description: 'FugeVet veteriner yazılımının tüm özellikleri - hasta yönetimi, randevu sistemi, faturalama, ve daha fazlası.',
}

export default function Features() {
  // Feature details data
  const featureDetails = [
    {
      id: 'randevu',
      title: 'Akıllı Randevu Yönetimi',
      description: 'Müşteri ve tedaviklerinizin bakiyesini anında görün, ödeme ve tahsilatlarınızı takip edin.',
      image: '/assets/features/randevu.svg',
      features: [
        'Randevular için otomatik hatırlatma mesajları',
        'Çakışmaları otomatik olarak önleyen randevu sistemi',
        'Randevu geçmişi ve tüm hasta bilgileri tek ekranda',
        'Veteriner hekimlere özel takvim görünümü',
        'Mobil uyumlu randevu sistemi ile her yerden erişim'
      ],
      reversed: false
    },
    {
      id: 'hatirlatici',
      title: 'Otomatik Hatırlatıcılar',
      description: 'Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.',
      image: '/assets/features/hatirlatici.svg',
      features: [
        'Aşı ve kontrol hatırlatmaları için otomatik SMS/E-posta',
        'Müşterilerinize özel hatırlatma seçenekleri',
        'Toplu mesaj gönderim imkanı',
        'Ödemesi geciken faturaların takibi',
        'İlaç ve sarf malzeme stok hatırlatmaları'
      ],
      reversed: true
    },
    {
      id: 'muhasebe',
      title: 'Muhasebe Yönetimi',
      description: 'Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.',
      image: '/assets/features/muhasebe.svg',
      features: [
        'Gelir-gider takibi ile finansal raporlama',
        'Fatura oluşturma ve yazdırma',
        'Borç/alacak takibi ve müşteri cari hesapları',
        'Günlük, aylık ve yıllık finansal raporlar',
        'Entegre kasa ve banka takibi'
      ],
      reversed: false
    },
    {
      id: 'bulut',
      title: 'Bulut Teknoloji',
      description: 'Tüm verileriniz bulut sunucularda güvenli bir şekilde saklanır ve izinsiz erişimi engeller.',
      image: '/assets/features/bulut.svg',
      features: [
        'Verilerinize her yerden güvenli erişim',
        'Otomatik yedekleme ile veri kaybı riski ortadan kalkar',
        'Bakım ve güncelleme gerektirmez',
        'Yüksek güvenlikli SSL şifreleme',
        'Birden fazla cihazda senkronize çalışma imkanı'
      ],
      reversed: true
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden w-full">
      <AnimatedBackground />
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
        <FeaturesHero />
        
        <div className="mt-20">
          {featureDetails.map((detail) => (
            <FeatureDetails 
              key={detail.id}
              id={detail.id}
              title={detail.title}
              description={detail.description}
              image={detail.image}
              features={detail.features}
              reversed={detail.reversed}
            />
          ))}
        </div>

        <AdditionalFeatures />
      </div>
    </main>
  )
} 