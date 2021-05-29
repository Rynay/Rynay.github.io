import { useLayoutEffect, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const Header = () => {
  const [width] = useWindowSize();
  const [style, setStyle] = useState({
    top: '5rem',
    left: width / 2 - 800 / 2 + 180,
  });

  useLayoutEffect(() => {
    setStyle({
      top: '5rem',
      left: width / 2 - 800 / 2 + 180,
    });
  }, [width]);

  return (
    <header style={style} className="header">
      Hello
    </header>
  );
};

export default Header;
