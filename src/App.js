import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import logo from './logo.svg';
import './App.css';
import {specLookupsRequest} from './action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAllPreviews} from "./selector";

class App extends Component {

  componentDidMount () {
      this.props.init();
  }

  render() {
    const { previews} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {previews.map((specPreview, i)=>(<div key={i} dangerouslySetInnerHTML={ {__html:specPreview.preview }}/>))}
      </div>
    );
  }
}

App.propTypes = {
    previews: PropTypes.array.isRequired,
    init: PropTypes.func.isRequired
};

export { App };

const mapStateToProps = (state) => ({
    previews: getAllPreviews(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    init: specLookupsRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

