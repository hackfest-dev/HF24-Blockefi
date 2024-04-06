import { NavListType, Navbar } from "@repo/ui";

const navList: NavListType[] = [
    { value: "Home", url: "/" },
    { value: "Add Report", url: "/doctor/add-report" },
    { value: "Verify Report", url: "/doctor/varify-report" },
    { value: "Patient Report", url: "/doctor/patient-report" }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  return (
    <div>
        <Navbar title="BLOCKEFI" navList={navList}/>
        {children}
    </div>
  );
}
