import type { NavbarProps } from "./navbar.types";

export function Navbar(props: NavbarProps): JSX.Element {
  const { title, navList = [] } = props;  

  return (
    <nav className="flex justify-between items-center p-5 bg-primary-500 text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <ul className="flex gap-8">
        {navList.map((item) => (
          <li className="font-bold text-lg" key={item.value}>
            <a href={item.url} >{item.value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
