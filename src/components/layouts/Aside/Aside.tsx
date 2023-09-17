import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../../assets/img/icons.svg";
import "./aside.scss";

interface INavItem {
  href: string;
  iconPath: string;
  title: string;
}

const navItems: INavItem[] = [
  {
    href: "/",
    iconPath: `${Icons}#icon-timer`,
    title: "Timer",
  },
  {
    href: "/todos",
    iconPath: `${Icons}#icon-list`,
    title: "Todos",
  },
  {
    href: "/stats",
    iconPath: `${Icons}#icon-stats`,
    title: "Stats",
  },
];

const Aside: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <aside className="aside p-5 flex flex-col h-full">
      <nav className="aside__nav flex flex-col gap-4">
        <ul className="flex flex-col gap-4">
          {navItems.map(({ href, iconPath, title }) => (
            <li>
              <NavItem
                href={href}
                iconPath={iconPath}
                title={title}
                key={title}
              />
            </li>
          ))}
        </ul>

        <div>
          <div></div>
          <ul>
            <li key={"ffwfw"}>
              <button>Добавить</button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;

const NavItem: FC<INavItem> = ({ href, iconPath, title }) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? "aside__nav-link flex items-center gap-2 rounded aside__nav-link--active"
        : "aside__nav-link flex items-center gap-2 rounded"
    }
    to={href}
  >
    <svg className="text-red" width={30} height={30}>
      <use href={iconPath}></use>
    </svg>
    {title}
  </NavLink>
);
