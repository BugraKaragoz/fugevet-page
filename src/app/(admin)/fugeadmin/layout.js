import '../../globals.css'
import '../../admin.css'
import AdminLayoutWrapper from '@/components/admin/AdminLayoutWrapper'

export const metadata = {
  title: 'Admin - FugeVet',
  description: 'FugeVet yönetici paneli',
}

export default function AdminLayout({ children }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
} 