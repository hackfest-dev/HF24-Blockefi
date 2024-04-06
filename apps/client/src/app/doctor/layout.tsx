"use client"

import { type NavListType, Navbar } from "@repo/ui";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const user = useAuth()
  const [navlist, setNavlist] = useState<NavListType[]>([]);  

  useEffect(() => {
    !user
      ? setNavlist([
          { value: "Home", url: "/" },
          { value: "Add Report", url: "/doctor/add-report" },
          { value: "Patient Report", url: "/doctor/patient-report" },
          { value: "Verify Report", url: "/doctor/varify-report" },
        ])
        : setNavlist([
          { value: "Home", url: "/" },
          { value: "Add Report", url: "/doctor/add-report" },
          { value: "Patient Report", url: "/doctor/patient-report" },
        ]);
  }, [user]);

  return (
    <div className="pt-20">
        <Navbar title="BLOCKEFI" navList={navlist}/>
        {children}
    </div>
  );
}
