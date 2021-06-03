import { FaInfo } from 'react-icons/fa';
import { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';

const Sidebar = ({ width, avatar, info = {} }) => {
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
        <h1 className="sidebar__name">{info.title}</h1>
        <p className="sidebar__job">{info.subtitle}</p>
      </div>
      <div className="sidebar__imageContainer">
        <img src={avatar} alt="" />
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

          {info.list?.map((field) => (
            <li key={field.title} className="sidebar__list-item">
              <div>
                {field.title}: <span>{field.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  avatar: state.data?.avatar,
  info: state.data?.info,
});

export default connect(mapStateToProps)(Sidebar);
