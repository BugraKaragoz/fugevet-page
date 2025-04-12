import AnimatedBackground from '@/components/home/AnimatedBackground';
import ComingSoon from '@/components/pricing/ComingSoon';

export const metadata = {
  title: 'Fiyatlandırma - FugeVet Veteriner Yönetim Yazılımı',
  description: 'FugeVet veteriner yazılımının fiyatlandırma paketleri - işletmenizin ihtiyaçlarına uygun paketi seçin.',
}

export default function Pricing() {
  return (
    <>
      <AnimatedBackground>
        <div></div>
      </AnimatedBackground>
      <main className="relative z-10 min-h-screen pt-20 pb-16 px-4">
        <ComingSoon />
      </main>
    </>
  );
} 