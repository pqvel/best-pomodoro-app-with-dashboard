import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../../assets/img/icons.svg";
import "./aside.scss";
import { useResizeElement } from "../../../core/hooks/useResizeElement";

/**
 * @todo
 * - разделить на страницы только main
 * - сделать isResize только по 2 клику
 */
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
  const {
    resizeElement,
    initResizeElement,
    mouseDownHandler,
    destroyResizeElement,
  } = useResizeElement();

  useEffect(() => {
    initResizeElement();
    return destroyResizeElement();
  }, []);
  return (
    <aside
      ref={resizeElement}
      className="aside relative p-5 flex flex-col h-full max-w-[320px] min-w-[94px]"
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
      <div
        className=" absolute right-0 top-0 h-full w-2 bg-white opacity-0 hover:opacity-50"
        onMouseDown={mouseDownHandler}
      ></div>
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
    <svg className="text-red min-w-[30px] max-h-[30px]" width={30} height={30}>
      <use href={iconPath}></use>
    </svg>
    <span className="truncate">{title}</span>
  </NavLink>
);
