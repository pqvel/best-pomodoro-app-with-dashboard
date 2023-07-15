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
        <ul>
          
        </ul>
        {navItems.map(({href, iconPath, title}) => (
          <li>
            <NavItem href={href} iconPath={iconPath} title={title} key={href}/>
          </li> 
        ))}
        <div>
          <div></div>
          <ul>
            <li>
              <button>Добавить</button>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Aside


const NavItem: FC<INavItem> = ({href, iconPath, title}) => (
  <NavLink 
    className={({ isActive }) =>
      isActive ? 'aside__nav-link flex items-center gap-2 rounded aside__nav-link--active' : 'aside__nav-link flex items-center gap-2 rounded'} 
    to={href}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 2.5C12.5277 2.5 10.111 3.23311 8.05537 4.60663C5.99976 5.98015 4.3976 7.93238 3.45151 10.2165C2.50541 12.5005 2.25787 15.0139 2.74018 17.4386C3.2225 19.8634 4.41301 22.0907 6.16117 23.8388C7.90932 25.587 10.1366 26.7775 12.5614 27.2598C14.9861 27.7421 17.4995 27.4946 19.7835 26.5485C22.0676 25.6024 24.0199 24.0002 25.3934 21.9446C26.7669 19.889 27.5 17.4723 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5ZM15 25C13.0222 25 11.0888 24.4135 9.4443 23.3147C7.79981 22.2159 6.51808 20.6541 5.76121 18.8268C5.00433 16.9996 4.8063 14.9889 5.19215 13.0491C5.578 11.1093 6.53041 9.32746 7.92893 7.92893C9.32746 6.53041 11.1093 5.578 13.0491 5.19215C14.9889 4.8063 16.9996 5.00433 18.8268 5.7612C20.6541 6.51808 22.2159 7.79981 23.3147 9.4443C24.4135 11.0888 25 13.0222 25 15C25 17.6522 23.9464 20.1957 22.0711 22.0711C20.1957 23.9464 17.6522 25 15 25Z" fill="currentColor"/>
      <path d="M20 13.75H16.25V10C16.25 9.66848 16.1183 9.35054 15.8839 9.11612C15.6495 8.8817 15.3315 8.75 15 8.75C14.6685 8.75 14.3505 8.8817 14.1161 9.11612C13.8817 9.35054 13.75 9.66848 13.75 10V15C13.75 15.3315 13.8817 15.6495 14.1161 15.8839C14.3505 16.1183 14.6685 16.25 15 16.25H20C20.3315 16.25 20.6495 16.1183 20.8839 15.8839C21.1183 15.6495 21.25 15.3315 21.25 15C21.25 14.6685 21.1183 14.3505 20.8839 14.1161C20.6495 13.8817 20.3315 13.75 20 13.75Z" fill="currentColor"/>
    </svg>
    {title}
  </NavLink>
)

