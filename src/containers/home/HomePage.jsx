import React, { Component, Fragment } from 'react'
import PreviewGrid from '../preview/PreviewGrid'
import connect from 'react-redux/es/connect/connect'
import PropTypes from 'prop-types'
import { homePageInit } from '../../action/home'
import { bindActionCreators } from 'redux'
import HomeIntro from './HomeIntro'

class HomePage extends Component {
  static getDerivedStateFromProps(props, state) {
    props.pageInit(props.match)
    return state
  }

  render() {
    return (
      <Fragment>
        <HomeIntro />
        <PreviewGrid />
      </Fragment>
    )
  }
}

HomePage.propTypes = {
  pageInit: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      pageInit: homePageInit
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(HomePage)
