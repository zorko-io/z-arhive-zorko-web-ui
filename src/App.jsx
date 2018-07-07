import React, { Component, Fragment } from 'react'
import './App.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavigationBar from './components/navigation/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/home/HomePage'
import PreviewPage from './containers/preview/PreviewPage'
import { ConnectedRouter } from 'react-router-redux'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <main>
          <ConnectedRouter history={this.props.history}>
            <Switch>
              <Route exact={true} path={'/'} component={HomePage} />
              <Route exact={false} path={'/specs'} component={PreviewPage} />
              <Route exact={false} path={'/specs/:specId'} component={PreviewPage} />
            </Switch>
          </ConnectedRouter>
        </main>
      </Fragment>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export { App }

export default function createApp(history) {
  const mapStateToProps = () => ({
    history: history
  })

  return connect(
    mapStateToProps,
    null
  )(App)
}
