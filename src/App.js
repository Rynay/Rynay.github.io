import { useState, useLayoutEffect, lazy, Suspense } from 'react';
import useWindowSize from './hooks/useWindowSize';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [width] = useWindowSize();
  const [style, setStyle] = useState({
    top: '14rem',
    left: width / 2 - 800 / 2 + 165,
  });

  useLayoutEffect(() => {
    setStyle({
      top: '14rem',
      left: width / 2 - 800 / 2 + 165,
    });
  }, [width]);

  return (
    <>
      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: '#FF7227',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 0.1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#FF7227',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      <div className="main-container">
        <Header />
        <Sidebar />
        <main style={style} className="main">
          <div className="container">
            <Suspense fallback={<div></div>}>
              <Switch>
                <Route path="/" exact>
                  <About />
                </Route>
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Suspense>
          </div>
          <div style={{ height: '5rem' }}></div>
        </main>
      </div>
    </>
  );
}

export default App;
