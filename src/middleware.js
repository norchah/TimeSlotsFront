import { NextResponse } from 'next/server';
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('access_token')?.value;

  // Если токена нет — редирект на логин
  if (!token) {
    console.warn(`Access denied: No token provided for ${request.nextUrl.pathname}`);
    return NextResponse.redirect(new URL('/unauthorized?reason=no-token', request.url));
  }

  try {
    // Верифицируем токен
    const decoded = jose.decodeJwt(token);
    console.log(decoded)
    const roles = decoded.roles || [];

    // Логируем успешную верификацию
    console.log(`Token verified for user id ${decoded.user_id}, roles: ${roles}`);

    // Проверяем доступ к маршрутам


    // Защищаем /timeslot для specialist и company
    if (pathname.startsWith('/timeslot')) {
      if (!roles.includes('specialist') && !roles.includes('company')) {
        console.warn(`Access denied: User ${decoded.sub} lacks required role for /timeslot`);
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }

    // Защищаем /admin только для company
    if (pathname.startsWith('/admin')) {
      if (!roles.includes('admin')) {
        console.warn(`Access denied: User ${decoded.sub} lacks 'company' role for /admin`);
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }
    // Разрешаем доступ
    return NextResponse.next();
  } catch (error) {
    // Обрабатываем ошибки (невалидный токен, expired)
    console.error(`JWT verification failed for ${request.nextUrl.pathname}: ${error.message}`);
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }
}

// Определяем маршруты для middleware
export const config = {
  matcher: [
    '/timeslot/:path*', // Все пути под /timeslot
    '/admin/:path*',    // Все пути под /admin
  ],
};