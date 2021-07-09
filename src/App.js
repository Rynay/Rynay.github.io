import { connect } from 'react-redux'
import * as AC from './redux/AC'
import { useLayoutEffect, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition, config } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Greeting from './pages/Greeting'
import About from './pages/About'
import Resume from './pages/Resume'
import Popup from './components/Popup'

function App({ initApp, portfolio }) {
  const [targetProjectName, setTargetProjectName] = useState(null)
  const [targetProject, setTargetProject] = useState({})
  const location = useLocation()

  useLayoutEffect(() => {
    if (targetProjectName && !config.disabled) {
      config.disabled = true
    } else if (!targetProjectName && config.disabled) {
      config.disabled = false
    }
  }, [targetProjectName])

  const disableAnimation = () => {
    config.disabled = true
  }
  const enableAnimation = () => {
    config.disabled = false
  }

  useLayoutEffect(() => {
    if (!portfolio) return
    setTargetProject(
      portfolio.find((project) => project.name === targetProjectName) || {}
    )
  }, [targetProjectName])

  useEffect(() => {
    initApp()
  }, [])

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <TransitionGroup className="fade-container">
            <CSSTransition key={location.key} timeout={500} classNames={'fade'}>
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
                      <Portfolio
                        disableAnimation={disableAnimation}
                        enableAnimation={enableAnimation}
                      />

                      <Route
                        exact
                        path="/portfolio/:name"
                        render={() => (
                          <Popup
                            setTargetProjectName={setTargetProjectName}
                            project={targetProject}
                          />
                        )}
                      />
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

const mapStateToProps = (state) => ({
  portfolio: state.data?.portfolio,
})

const mapDispatchToProps = (dispatch) => ({
  initApp: () => {
    dispatch(AC.initApp())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
