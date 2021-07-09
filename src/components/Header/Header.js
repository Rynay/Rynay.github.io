import { NavLink } from 'react-router-dom'
const links = [
  {
    anchor: '/portfolio',
    children: 'portfolio',
  },
  {
    anchor: '/resume',
    children: 'resume',
  },
  {
    anchor: '/about',
    children: 'about me',
  },
]

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink
          aria-label="go to home page"
          to="/"
          exact
          className="header__home"
          activeClassName="header__home--active disabled">
          KL
        </NavLink>
        <ul className="header__list">
          {links.map((link) => (
            <li key={link.anchor} className="header__list-item">
              <NavLink
                to={link.anchor}
                className="header__link"
                activeClassName="header__link--active disabled">
                {link.children}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
