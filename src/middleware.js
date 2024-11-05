import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Handle root path redirect
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/gore', request.url))
  }

  // Handle /en root path redirect
  if (pathname === '/en') {
    return NextResponse.redirect(new URL('/en/gore', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/en', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
