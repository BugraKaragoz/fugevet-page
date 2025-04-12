import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import AnimatedBackground from '@/components/home/AnimatedBackground';

export const metadata = {
  title: 'İletişim - FugeVet Veteriner Programı',
  description: 'FugeVet ile iletişime geçin. Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.',
}

export default function ContactPage() {
  return (
    <>
      <AnimatedBackground>
        <div></div>
      </AnimatedBackground>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ana içerik */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-indigo-600 mr-3">İletişime</span>
              <span>Geçin</span>
            </h1>
            <div className="w-36 h-1 bg-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz. En kısa sürede size yanıt vermekten memnuniyet duyarız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ContactInfo />
            <ContactForm />
          </div>
          
          {/* Harita */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Bizi Ziyaret Edin</h2>
            <p className="text-gray-600 text-center mb-6">
              Aşağıdaki haritayı kullanarak ofisimize kolayca ulaşabilirsiniz. Bekleriz!
            </p>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.575765358998!2d32.75141411538089!3d39.9075433793548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520e02d03%3A0x36a2c12ce0a3cc25!2sBilkent%20Center!5e0!3m2!1str!2str!4v1598353262422!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Bilkent Center Harita"
              ></iframe>
            </div>
          </div>
          
          {/* Alt bilgiler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 backdrop-blur-sm bg-opacity-95">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenlik</h3>
              <p className="text-gray-600">Ziyaret için lütfen önceden randevu alınız. Ofis girişinde güvenlik kontrolü vardır.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 backdrop-blur-sm bg-opacity-95">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00<br/>Hafta sonu: Kapalı</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 backdrop-blur-sm bg-opacity-95">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ulaşım</h3>
              <p className="text-gray-600">Toplu taşıma ile ulaşım için 440 numaralı otobüs hattını kullanabilirsiniz.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 