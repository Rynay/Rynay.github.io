import { useLayoutEffect, useState } from 'react';
import { FaHome, FaPaperPlane } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';

const Header = () => {
  const [width] = useWindowSize();
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
          <li className="header__list-item">
            <NavLink
              to="/resume"
              className="header__link"
              activeClassName="header__link--active"
            >
              Resume
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink
              to="/portfolio"
              className="header__link"
              activeClassName="header__link--active"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink
              to="/contact"
              className="header__link"
              activeClassName="header__link--active"
            >
              Contact
            </NavLink>
          </li>
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
