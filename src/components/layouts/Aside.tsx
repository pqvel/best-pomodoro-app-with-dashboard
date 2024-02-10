import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useResizeElement } from "../../core/hooks/useResizeElement";
import Svg from "../ui/Svg";
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
    iconPath: `icon-timer`,
    title: "Timer",
  },
  {
    href: "/todos",
    iconPath: `icon-list`,
    title: "Todos",
  },
  {
    href: "/stats",
    iconPath: `icon-stats`,
    title: "Stats",
  },
  {
    href: "/info",
    iconPath: `icon-book`,
    title: "Техника Pomodoro",
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
      className=" bg-slate-950 w-80 relative p-5 flex flex-col h-full max-w-[320px] min-w-[94px]"
    >
      <nav className="flex flex-col gap-4">
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
        ? "flex py-2 px-3 items-center gap-2 rounded transition font-semibold text-red-600 bg-white "
        : "flex py-2 px-3 items-center gap-2 rounded transition font-semibold hover:bg-slate-200 hover:text-black text-white"
    }
    to={href}
  >
    <Svg className="text-red" width={30} height={30} iconId={iconPath} />
    <span className="truncate">{title}</span>
  </NavLink>
);
