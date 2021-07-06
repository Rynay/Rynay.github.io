import { connect } from 'react-redux';
import * as AC from './redux/AC';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';

function App({ initApp }) {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      {/* <Sidebar /> */}
      <Header />

      <main className="main">
        <div className="container">
          <Switch>
            {/* <Route path="/" exact component={About} /> */}
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
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
