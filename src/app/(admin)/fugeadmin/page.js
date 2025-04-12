import AnimatedBackground from '@/components/home/AnimatedBackground';
import AdminLoginForm from '@/components/auth/AdminLoginForm';

export const metadata = {
  title: 'Admin Girişi - FugeVet',
  description: 'FugeVet yönetici paneli giriş sayfası',
}

export default function AdminLoginPage() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex justify-center items-center min-h-screen py-10 px-4">
        <AdminLoginForm />
      </main>
    </>
  )
} 