import { useLayoutEffect, useState } from 'react';
import { FaHome, FaPaperPlane } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const links = [
  {
    anchor: '/resume',
    children: 'Resume',
  },
  {
    anchor: '/portfolio',
    children: 'Portfolio',
  },
  {
    anchor: '/contact',
    children: 'Contact',
  },
];

const Header = ({ width }) => {
  const [style, setStyle] = useState({
    top: '5rem',
    left: width / 2 - 800 / 2 + 165,
  });

  useLayoutEffect(() => {
    setStyle({
      top: '5rem',
      left: width / 2 - 800 / 2 + 165,
    });
  }, [width]);

  return (
    <header style={style} className="header">
      <nav>
        <ul className="header__list">
          <li className="header__list-item header__list-item--home">
            <Link to="/" className="header__link">
              <FaHome />
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.anchor} className="header__list-item">
              <NavLink
                to={link.anchor}
                className="header__link"
                activeClassName="header__link--active"
              >
                {link.children}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header__hireMe" href="mailto:feirs911@gmail.com">
        <span>Hire Me</span>
        <span className="header__hireMeIcon">
          <FaPaperPlane />
        </span>
      </a>
    </header>
  );
};

export default Header;
