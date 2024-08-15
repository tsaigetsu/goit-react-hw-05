import clsx from "clsx";
import s from './Header.module.css'
import { NavLink } from "react-router-dom"

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

const Header = () => {
  return (
    <header className={s.header}>
        <nav>
            <ul className={s.nav}>
                <li className={s.navItem}>
                    <NavLink className={buildLinkClass} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={buildLinkClass} to='movies'>Movies</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header