"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Role } from "@/lib/data";

const Ctx = createContext<{ role: Role; setRole: (r: Role) => void }>({ role: "swe", setRole: () => {} });

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("swe");
  return <Ctx.Provider value={{ role, setRole }}>{children}</Ctx.Provider>;
}
export const useRole = () => useContext(Ctx);
