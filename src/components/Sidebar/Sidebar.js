import { FaInfo } from 'react-icons/fa';
import { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const Sidebar = ({ isMobileStyles, width, avatar, info = {} }) => {
  const [style, setStyle] = useState({
    top: '5rem',
    left: `${(width / 2 - 800 / 2) / 10}rem`,
    transform: 'translateX(-50%)',
  });

  useLayoutEffect(() => {
    if (width <= 1080 && width !== 0) {
      setStyle({
        position: 'relative',
        order: 1,
        transform: 'translateX(0)',
        width: 'auto',
        margin: '2rem',
      });
      return;
    } else {
      setStyle({
        top: '5rem',
        left: `${(width / 2 - 800 / 2) / 10}rem`,
        transform: 'translateX(-50%)',
      });
    }
  }, [width, isMobileStyles]);
  return (
    <section style={style} className="sidebar">
      <div className="sidebar__header">
        {!info.title && (
          <div>
            <Skeleton height={26} width={175} count={1} />
          </div>
        )}
        {info.title && <h1 className="sidebar__name">{info.title}</h1>}
        {!info.subtitle && (
          <div>
            <Skeleton height={18} width={125} count={1} />
          </div>
        )}
        {info.subtitle && <p className="sidebar__job">{info.subtitle}</p>}
      </div>
      <div className="sidebar__imageContainer">
        {!avatar && <Skeleton width={'100%'} height={175} count={1} />}
        {avatar && <img src={avatar} alt="" />}
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

          {!info.list && (
            <>
              <li>
                <Skeleton height={26} width={175} count={1} />
              </li>
              <li>
                <Skeleton height={26} width={175} count={1} />
              </li>
              <li>
                <Skeleton height={26} width={175} count={1} />
              </li>
              <li style={{ marginBottom: '3rem' }}>
                <Skeleton height={26} width={175} count={1} />
              </li>
            </>
          )}

          {info.list &&
            info.list?.map((field) => (
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
