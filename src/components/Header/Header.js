import { FaHome } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
];

const Header = ({ email }) => {
  return (
    <header className="header">
      <nav>
        <Link aria-label="go to home page" to="/" className="header__home">
          <FaHome />
        </Link>
        <ul className="header__list">
          {links.map((link) => (
            <li key={link.anchor} className="header__list-item">
              <NavLink
                to={link.anchor}
                className="header__link"
                activeClassName="header__link--active">
                {link.children}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  email: state.data?.email,
});

export default connect(mapStateToProps)(Header);
