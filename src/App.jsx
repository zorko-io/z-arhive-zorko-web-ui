import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import './App.css';
import {specLookupsRequest} from './action';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAllPreviews} from "./selector";
import NavigationBar from "./components/navigation/NavigationBar";

class App extends Component {

  componentDidMount () {
      this.props.init();
  }

  render() {
    const { previews } = this.props;

    return (
        <Fragment>
            <NavigationBar/>
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

