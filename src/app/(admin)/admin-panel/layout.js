import '../../globals.css'
import '../../admin.css'
import AdminLayoutWrapper from '@/components/admin/AdminLayoutWrapper'

export const metadata = {
  title: 'Admin Panel - FugeVet',
  description: 'FugeVet yönetici kontrol paneli',
}

export default function AdminPanelLayout({ children }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
} 