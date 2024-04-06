"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import SERVER_URL from "../../config/server.config";

const AuthContext = createContext<null | unknown>(null);

export function useAuth(): null | unknown {
  return useContext(AuthContext)
}

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [user, setUser] = useState<null | unknown>(null)

  useEffect(() => {
    const getAuthUser = async (): Promise<void> => {
      const url = `${SERVER_URL  }/auth/user`
      const res = await fetch(url, {
        method: "GET",
        credentials: "include"
      })

      if (res.status === 200) {
        await res.json()
        .then(authUser => {setUser(authUser)})
      }
    }

    void getAuthUser()
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
