import { FaInfo } from 'react-icons/fa';
import { useLayoutEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const Sidebar = () => {
  const [width] = useWindowSize();
  const [style, setStyle] = useState({
    top: '5rem',
    left: `${(width / 2 - 800 / 2) / 10}rem`,
    transform: 'translateX(-50%)',
  });

  useLayoutEffect(() => {
    setStyle({
      top: '5rem',
      left: `${(width / 2 - 800 / 2) / 10}rem`,
      transform: 'translateX(-50%)',
    });
  }, [width]);
  return (
    <section style={style} className="sidebar">
      <div className="sidebar__header">
        <h1 className="sidebar__name">Madison Marshall</h1>
        <p className="sidebar__job">Frontend Developer</p>
      </div>
      <div className="sidebar__imageContainer">
        <img src="/images/avatar.jpg" alt="" />
      </div>
      <div className="sidebar__info">
        <span className="sidebar__iconContainer">
          <FaInfo className="sidebar__icon" />
        </span>
        <ul className="sidebar__list">
          <li
            aria-hidden
            style={{ color: 'transparent' }}
            className="sidebar__list-item"
          >
            .
          </li>
          <li className="sidebar__list-item">
            <div>
              Name: <span>Madison Marshall</span>
            </div>
          </li>
          <li className="sidebar__list-item">
            <div>
              Birthday: <span>14 february 2001</span>
            </div>
          </li>
          <li className="sidebar__list-item">
            <div>
              Job: <span>Student</span>
            </div>
          </li>
          <li className="sidebar__list-item">
            <div>
              Email: <span>Email@gmail.com</span>
            </div>
          </li>
          <li className="sidebar__list-item">
            <div>
              Skype: <span>Madison Marshall</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
