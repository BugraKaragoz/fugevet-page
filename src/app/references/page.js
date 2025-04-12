import AnimatedBackground from '@/components/home/AnimatedBackground';
import ComingSoon from '@/components/references/ComingSoon';

export const metadata = {
  title: 'Referanslar - FugeVet Veteriner Programı',
  description: 'FugeVet müşteri referansları ve başarı hikayeleri',
}

export default function ReferencesPage() {
  return (
    <>
      <AnimatedBackground>
        <div></div>
      </AnimatedBackground>
      <main className="relative z-10 min-h-screen pt-20 pb-16 px-4">
        <ComingSoon />
      </main>
    </>
  )
} 