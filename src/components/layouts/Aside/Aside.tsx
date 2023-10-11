import { FC, useRef, useState, MouseEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../../assets/img/icons.svg";
import "./aside.scss";
import { useResizeElement } from "../../../core/hooks/useResizeElement";

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
  const { width, mouseDownHandler, mouseMoveHandler, mouseUpHandler } =
    useResizeElement({
      maxWidth: 320,
      minWidth: 60,
      initialWidth: 320,
    });
  return (
    <aside
      className="aside p-5 flex flex-col h-full"
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      style={{ width }}
    >
      <nav className="aside__nav flex flex-col gap-4">
        <ul className="flex flex-col gap-4">
          {navItems.map(({ href, iconPath, title }) => (
            <li key={title}>
              <NavItem href={href} iconPath={iconPath} title={title} />
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
