import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import SERVER_URL from "./config/server.config";

export const middleware = async (req: NextRequest) => {    
  const cookieStore = cookies()

  const URL = `${SERVER_URL  }/auth/user`
  const token = cookieStore.get("token")?.value  

  if  (!token)
    return NextResponse.redirect(`${req.nextUrl.origin}/login`)

  const responce = await fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  if (responce.status !== 200)
    return NextResponse.redirect(`${req.nextUrl.origin}/login`)
} 

export const config = {
  matcher: ['/doctor/add-report']
}