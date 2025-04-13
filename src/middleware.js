import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Ana admin URL'sini /fugeadmin'e yönlendir
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/fugeadmin', request.url));
  }

  // /admin ile başlayan URL'leri kontrol et
  if (pathname.startsWith('/admin/')) {
    // Burada basit bir auth kontrolü yapabilirsiniz
    // Gerçek projede cookie/session kontrolü yapılır
    
    // Örnek: Basit bir kontrol için
    // Eğer oturum yoksa /fugeadmin'e yönlendir
    
    // Bu örnekte her zaman izin veriyoruz
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  // Admin url'lerini yakalamak için
  matcher: ['/admin/:path*', '/fugeadmin', '/admin']
}; 