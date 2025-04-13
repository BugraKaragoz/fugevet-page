import BlogHeader from '@/components/blog/BlogHeader';
import BlogContent from '@/components/blog/BlogContent';
import BlogReferences from '@/components/blog/BlogReferences';
import RelatedPosts from '@/components/blog/RelatedPosts';
import styles from './page.module.css';

// Dummy blog verisi
const getBlogPost = (slug) => {
  // Gerçek bir uygulamada burası API'den alınacak veri olacak
  return {
    slug,
    title: 'Veteriner Kliniklerinde Dijital Dönüşüm ve Teknoloji Entegrasyonu',
    coverImage: 'https://placehold.co/1200x450/0062cc/FFFFFF.webp?text=Dijital+Dönüşüm',
    date: '2025-04-11',
    category: 'Teknoloji',
    author: {
      name: 'Dr. Ahmet Yılmaz',
      avatar: 'https://placehold.co/100x100/e9e9e9/333333.webp?text=AY',
    },
    content: `Veteriner klinikleri, son yıllarda dijital dönüşüm ve teknoloji entegrasyonu konusunda büyük adımlar atmaya başladı. Bu dönüşüm, hem veteriner hekimlerin hasta bakımını iyileştirmesine hem de klinik operasyonlarını daha verimli hale getirmesine yardımcı oluyor.

Dijital dönüşümün en önemli bileşenlerinden biri, veteriner klinik yönetim sistemleridir. Bu sistemler, randevu yönetimi, hasta kayıtları, stok takibi, faturalama ve daha birçok operasyonel süreci dijitalleştirerek kliniklerin daha düzenli ve verimli çalışmasını sağlar.

Modern veteriner kliniklerinde artık kağıt bazlı kayıtlar yerine dijital hasta kayıtları kullanılıyor. Bu dijital kayıtlar, hastaların tüm tıbbi geçmişine anında erişim sağlar ve tedavi kararlarının daha hızlı ve doğru alınmasına yardımcı olur. Ayrıca, dijital hasta kayıtları, hastaların tüm sağlık verilerinin güvenli ve organize bir şekilde saklanmasını sağlar.

Teşhis teknolojilerindeki gelişmeler de veteriner kliniklerinde büyük fark yaratıyor. Dijital röntgen, ultrason ve MRI gibi gelişmiş görüntüleme teknolojileri, veteriner hekimlerin hastalıkları daha erken ve daha doğru teşhis etmelerine olanak tanır. Bu da tedavinin daha erken başlamasını ve başarı oranının artmasını sağlar.

İlaç ve tedavi yönetimi de dijital dönüşümden büyük ölçüde etkilenmiştir. Otomatik ilaç sipariş sistemleri ve elektronik reçete uygulamaları, ilaç hatalarını azaltır ve tedavi sürecini daha güvenli hale getirir.

Online randevu sistemleri, pet sahiplerinin istedikleri zaman ve yerden randevu almalarını sağlar. Bu, klinik personelinin telefon trafiğini azaltarak daha verimli çalışmasına yardımcı olur. Ayrıca, otomatik randevu hatırlatmaları, randevu kaçırma oranlarını azaltır.

Mobil uygulamalar ve online portallar, pet sahiplerinin evcil hayvanlarının sağlık kayıtlarına erişmelerini, ilaç hatırlatıcıları almalarını ve veterinerleriyle iletişim kurmalarını sağlar. Bu, pet sahiplerinin evcil hayvanlarının bakımında daha aktif rol oynamalarına yardımcı olur.

Yapay zeka (AI) ve makine öğrenimi teknolojileri, veteriner tıbbında da kullanılmaya başlanmıştır. Bu teknolojiler, hastalıkların erken teşhisinde, tedavi planlamasında ve hatta cerrahi operasyonlarda yardımcı olabilir.

Uzaktan sağlık hizmetleri (telemedicine), özellikle COVID-19 pandemisi sırasında hızla yaygınlaştı. Veteriner hekimler, video konferans aracılığıyla pet sahipleriyle görüşebilir ve bazı durumlarda ön tanı koyabilir veya tedavi önerebilir.

Bulut tabanlı çözümler, klinik verilerine her yerden erişim sağlar ve veri kaybı riskini azaltır. Ayrıca, bu çözümler, kliniklerin BT altyapısı yatırımlarını azaltarak maliyetleri düşürür.`,
    images: [
      {
        src: 'https://placehold.co/800x450/e6f2ff/333333.webp?text=Dijital+Teknolojiler',
        alt: 'Veteriner kliniğinde dijital teknolojilerin kullanımı',
        caption: 'Modern bir veteriner kliniğinde dijital teknolojilerin kullanımı hastalarla ilgili verilere anında erişim sağlar.'
      },
      {
        src: 'https://placehold.co/800x450/e6f2ff/333333.webp?text=Mobil+Teknolojiler',
        alt: 'Veteriner hekim tablet bilgisayarla çalışırken',
        caption: 'Mobil cihazlar, veteriner hekimlerin hareket halindeyken bile hasta bilgilerine erişmelerini sağlar.'
      }
    ],
    references: [
      {
        author: 'Johnson, M. ve Smith, K.',
        title: 'Veterinary Practice Management in the Digital Age',
        publisher: 'Journal of Veterinary Business and Economics',
        year: '2024',
        pages: '45-52',
        url: 'https://example.com/journal-article'
      },
      {
        author: 'Williams, T.',
        title: 'Digital Transformation in Animal Healthcare',
        publisher: 'Veterinary Technology Press',
        year: '2023',
        url: 'https://example.com/book'
      },
      {
        author: 'Veterinary Digital Association',
        title: 'Technology Adoption Survey in Veterinary Clinics',
        year: '2024',
        note: 'Online rapor',
        url: 'https://example.com/survey'
      }
    ]
  };
};

// İlgili blog yazıları için dummy veri
const getRelatedPosts = () => {
  return [
    {
      slug: 'veteriner-kliniklerinde-yapay-zeka',
      title: 'Veteriner Kliniklerinde Yapay Zeka Uygulamaları',
      excerpt: 'Yapay zeka teknolojilerinin veteriner hekimliğinde kullanım alanları ve faydaları hakkında detaylı bilgi.',
      coverImage: 'https://placehold.co/400x240/0095ff/FFFFFF.webp?text=Yapay+Zeka',
      date: '2025-03-28',
      category: 'Teknoloji'
    },
    {
      slug: 'mobil-veteriner-uygulamalari',
      title: 'Mobil Veteriner Uygulamaları ve Uzaktan Sağlık Hizmetleri',
      excerpt: 'Mobil teknolojilerin veteriner hekimliğine getirdiği yenilikler ve uzaktan sağlık hizmetlerinin avantajları.',
      coverImage: 'https://placehold.co/400x240/0095ff/FFFFFF.webp?text=Mobil+Uygulamalar',
      date: '2025-02-15',
      category: 'Teknoloji'
    },
    {
      slug: 'veri-guvenligi-veteriner-klinikleri',
      title: 'Veteriner Kliniklerinde Veri Güvenliği ve Gizlilik',
      excerpt: 'Dijital dönüşüm sürecinde veteriner kliniklerinin veri güvenliği ve gizlilik konusunda dikkat etmesi gereken hususlar.',
      coverImage: 'https://placehold.co/400x240/0095ff/FFFFFF.webp?text=Veri+Güvenliği',
      date: '2025-01-20',
      category: 'Güvenlik'
    }
  ];
};

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  
  return {
    title: `${post.title} | FugeVet Blog`,
    description: post.content.slice(0, 155) + '...',
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 155) + '...',
      images: [post.coverImage],
    },
  };
}

export default function BlogDetailPage({ params }) {
  const post = getBlogPost(params.slug);
  const relatedPosts = getRelatedPosts();
  
  return (
    <div className={styles.blogDetailPage}>
      <div className={styles.blogBackground} />
      
      <div className={styles.blogContent}>
        <BlogHeader 
          title={post.title}
          coverImage={post.coverImage}
          author={post.author}
          date={post.date}
          category={post.category}
        />
        
        <BlogContent 
          content={post.content}
          images={post.images}
        />
        
        <BlogReferences 
          references={post.references}
        />
        
        <RelatedPosts 
          posts={relatedPosts}
        />
      </div>
    </div>
  );
} 