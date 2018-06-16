import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import {specLookupsRequest} from './action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount () {
      this.props.init();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
    preview: PropTypes.array.isRequired,
    init: PropTypes.func.isRequired
};

export { App };

const mapStateToProps = (state) => ({
    preview: state.specs.previews
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    init: specLookupsRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

