import AnimatedBackground from '@/components/home/AnimatedBackground';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Veteriner Hekim Girişi - FugeVet',
  description: 'Veteriner hekimler için giriş sayfası',
}

export default function LoginPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex justify-center items-center min-h-screen py-10 px-4">
        <LoginForm />
      </main>
    </>
  )
} 