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

class App extends Component {
  componentDidMount() {
    this.props.init()
  }

  render() {
    return (
      <Fragment>
        <NavigationBar />
        <main>
          <Switch>
            <Route exact={true} path={'/'} component={HomePage} />
            <Route exact={false} path={'/specs'} component={PreviewPage} />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

App.propTypes = {
  init: PropTypes.func.isRequired
}

export { App }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      init: specLookupsRequest
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(App)
