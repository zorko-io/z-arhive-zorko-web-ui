import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import './App.css'
import { specLookupsRequest } from './action'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavigationBar from './components/navigation/NavigationBar'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/home/HomePage'
import PreviewPage from './containers/preview/PreviewPage'
import { ConnectedRouter } from 'react-router-redux'

class App extends Component {
  componentDidMount() {
    this.props.init()
  }

  render() {
    return (
      <Fragment>
        <NavigationBar />
        <main>
          <ConnectedRouter history={this.props.history}>
            <Switch>
              <Route exact={true} path={'/'} component={HomePage} />
              <Route exact={false} path={'/specs'} component={PreviewPage} />
            </Switch>
          </ConnectedRouter>
        </main>
      </Fragment>
    )
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export { App }

export default function createApp(history) {
  const mapStateToProps = () => ({
    history: history
  })
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        init: specLookupsRequest
      },
      dispatch
    )

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
