import { connect } from 'react-redux'
import * as AC from './redux/AC'
import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Greeting from './pages/Greeting'
import About from './pages/About'
import Resume from './pages/Resume'
import Popup from './components/Popup'

function App({ initApp }) {
  const location = useLocation()
  useEffect(() => {
    initApp()
  }, [])

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <TransitionGroup className="fade-container">
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch>
                <Route path="/" exact component={Greeting} />

                <div
                  style={{
                    backgroundImage: "url('/images/bg2.jpg')",
                  }}
                  className="background">
                  <div className="background__overlay" />
                  <Route path="/portfolio">
                    <>
                      <Portfolio />
                      <Route exact path="/portfolio/:name" component={Popup} />
                    </>
                  </Route>
                  <Route path="/about" component={About} />
                  <Route path="/resume" component={Resume} />
                </div>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </main>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  initApp: () => {
    dispatch(AC.initApp())
  },
})

export default connect(null, mapDispatchToProps)(App)
