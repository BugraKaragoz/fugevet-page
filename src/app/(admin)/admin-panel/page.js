import AdminPanel from '@/components/admin/AdminPanel';

export const metadata = {
  title: 'Yönetici Paneli - FugeVet',
  description: 'FugeVet yönetici kontrol paneli',
}

export default function AdminPanelPage() {
  return (
    <main>
      <AdminPanel />
    </main>
  )
} 