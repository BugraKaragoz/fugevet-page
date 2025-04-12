import AnimatedBackground from '@/components/home/AnimatedBackground';
import TrialForm from '@/components/trial/TrialForm';

export const metadata = {
  title: 'Ücretsiz Deneyin - FugeVet Veteriner Yazılımı',
  description: '14 gün ücretsiz FugeVet veteriner klinik yazılımını deneyin.',
}

export default function TrialPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex justify-center items-center min-h-screen py-10 px-4">
        <TrialForm />
      </main>
    </>
  )
} 