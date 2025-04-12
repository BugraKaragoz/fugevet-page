import AnimatedBackground from '@/components/home/AnimatedBackground';
import Mockups from '@/components/home/Mockups';
import FeatureSection from '@/components/home/FeatureSection';
import ClientLogos from '@/components/home/ClientLogos';
import HowToUse from '@/components/home/HowToUse';
import BlogSection from '@/components/home/BlogSection';
import FAQ from '@/components/home/FAQ';
import TreatmentSystem from '@/components/home/TreatmentSystem';
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