import { NextResponse } from 'next/server';
import { jwtVerify } from "jose";
export async function middleware(request) {
    const jwt=request.cookies.get('myTokenName');
    
        if (jwt===undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        
        return NextResponse.next();
        
    
    //return NextResponse.next();
  }

  export const config={
    matcher:['/dashboard', '/', '/index'],
  }
  