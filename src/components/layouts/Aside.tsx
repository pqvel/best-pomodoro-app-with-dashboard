import { FC, useState } from "react"
import { NavLink } from "react-router-dom";

interface INavItem {
  href: string,
  iconPath: string,
  title: string
}

const navItems: INavItem[] =  [
  {
    href
  }
]

const Aside: FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <header>
        
      </header>
    </>
  )
}

export default Aside


const NavItem: FC<INavItem> = ({href, iconPath, title}) => (
  <NavLink className="" to={href}>
    <svg width={16} height={16}>
      <use href={iconPath}></use>
    </svg>
    {title}
  </NavLink>
)

