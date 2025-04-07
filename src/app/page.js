import AnimatedBackground from '@/pages/home/backgrounds/AnimatedBackground';
import Mockups from '@/pages/home/mockups/Mockups';
import FeatureSection from '@/pages/home/feature/FeatureSection';
import ClientLogos from '@/pages/home/clients/ClientLogos';
import HowToUse from '@/pages/home/HowToUse';
import BlogSection from '@/pages/home/blog/BlogSection';
import FAQ from '@/pages/home/FAQ';
import TreatmentSystem from '@/pages/home/feature/TreatmentSystem';
import styles from './page.module.css';

export const metadata = {
  title: 'FugeVet - Veteriner Programı',
  description: 'Veteriner klinikleriniz için özel olarak tasarlanmış programımız ile iş yükünüzü azaltın.',
}

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className={styles.mainContent}>
        <Mockups />
        <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
          <FeatureSection />
        </div>
        <TreatmentSystem />
        <HowToUse />
        <ClientLogos />
        <FAQ />
        <BlogSection />
      </main>
    </>
  )
} 