import { connect } from 'react-redux';
import * as AC from './redux/AC';
import { lazy, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const Portfolio = lazy(() =>
  import(/* webpackPreload: true */ './pages/Portfolio/index')
);
const Greeting = lazy(() =>
  import(/* webpackPreload: true */ './pages/Greeting/index')
);
const About = lazy(() =>
  import(/* webpackPreload: true */ './pages/About/index')
);
const Resume = lazy(() =>
  import(/* webpackPreload: true */ './pages/Resume/index')
);

function App({ initApp }) {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Greeting} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
            </Switch>
          </Suspense>
        </div>
      </main>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  initApp: () => {
    dispatch(AC.initApp());
  },
});

export default connect(null, mapDispatchToProps)(App);
