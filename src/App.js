import { connect } from 'react-redux'
import * as AC from './redux/AC'
import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Greeting from './pages/Greeting'
import About from './pages/About'
import Resume from './pages/Resume'

function App({ initApp }) {
  useEffect(() => {
    initApp()
  }, [])

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Greeting} />
            <div
              style={{
                backgroundImage: "url('/images/bg2.jpg')",
              }}
              className="background">
              <div className="background__overlay" />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
            </div>
          </Switch>
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
