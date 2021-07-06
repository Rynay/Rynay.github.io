import { FaHome, FaPaperPlane } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const links = [
  {
    anchor: '/portfolio',
    children: 'Портфолио',
  },
];

const Header = ({ email }) => {
  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <li className="header__list-item header__list-item--home">
            <Link aria-label="go to home page" to="/" className="header__link">
              <FaHome />
            </Link>
          </li>
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
      <a className="header__hireMe" href={`mailto:${email}`}>
        <span>Написать</span>
        <span className="header__hireMeIcon">
          <FaPaperPlane />
        </span>
      </a>
    </header>
  );
};

const mapStateToProps = (state) => ({
  email: state.data?.email,
});

export default connect(mapStateToProps)(Header);
