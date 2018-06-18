import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import './App.css';
import {specLookupsRequest} from './action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAllPreviews} from "./selector";
import logo from './logo.png';

class App extends Component {

  componentDidMount () {
      this.props.init();
  }

  render() {
    const { previews} = this.props;

    return (
        <Fragment>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://www.zorko.io">
                        <img src={logo}
                             alt="Zorko: a place to discover and share visualizations"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
            </nav>
            <main>
                {previews.map((specPreview, i)=>(
                    <div key={i} dangerouslySetInnerHTML={ {__html:specPreview.preview }}/>
                ))}
            </main>
        </Fragment>
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

