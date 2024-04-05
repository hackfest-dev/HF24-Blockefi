import type { NavbarProps } from "./navbar.types";

export function Navbar(props: NavbarProps): JSX.Element {
  const { title, navList = [] } = props;  

  return (
    <nav className="ui-flex ui-justify-between ui-p-5">
      <h1>{title}</h1>
      <ul className="ui-flex ui-gap-10">
        {navList.map((item) => (
          <li key={item.url}>
            <a href={item.url}>{item.value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
