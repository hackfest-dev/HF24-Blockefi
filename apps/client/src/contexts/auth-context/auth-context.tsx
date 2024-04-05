"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";

const AuthContext = createContext<null>(null);

export function useAuth(): null {
  return useContext(AuthContext)
}

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}
