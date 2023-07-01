import { FC, useState } from "react"
import { NavLink } from "react-router-dom";

import './aside.scss';

interface INavItem {
  href: string,
  iconPath: string,
  title: string
}

const navItems: INavItem[] =  [
  
    {
      href: '/',
      iconPath: '',
      title: 'Timer'
    },
    {
      href: '/todos',
      iconPath: '',
      title: 'Todos'
    },
    {
      href: '/stats',
      iconPath: '',
      title: 'Stats'
    },

  
]

const Aside: FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <aside className="aside p-5 flex flex-col h-full">
      <nav className="aside__nav flex flex-col gap-4">
        {navItems.map(({href, iconPath, title}) => (
          <NavItem href={href} iconPath={iconPath} title={title} key={href}/>
        ))}
      </nav>
    </aside>
  )
}

export default Aside


const NavItem: FC<INavItem> = ({href, iconPath, title}) => (
  <NavLink 
    className={({ isActive }) =>
      isActive ? 'aside__nav-link flex gap-2 rounded aside__nav-link--active' : 'aside__nav-link flex gap-2 rounded'} 
    to={href}>
    <svg width={16} height={16}>
      <use href={iconPath}></use>
    </svg>
    {title}
  </NavLink>
)

