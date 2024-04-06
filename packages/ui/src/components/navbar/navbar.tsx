import type { NavbarProps } from "./navbar.types";

export function Navbar(props: NavbarProps): JSX.Element {
  const { title, navList = [] } = props;  

  return (
    <nav className="flex justify-between items-center p-5 dark:border-white">
      <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: 'white', marginBottom: '1.25rem' }}>Blockefi</h1>
    </nav>
  );
}
