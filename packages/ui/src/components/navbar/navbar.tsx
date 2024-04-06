"use client"

import type { NavbarProps } from "./navbar.types";

export function Navbar(props: NavbarProps): JSX.Element {
  const { title, navList = [] } = props;  

  return (
    <nav className="ui-fixed ui-flex ui-justify-between ui-items-center ui-p-5 ui-bg-primary-500 ui-text-white ui-w-full ui-top-0 ui-z-10">
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
