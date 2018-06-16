import {createStore, compose, applyMiddleware} from 'redux';
import {DEFAULT_APP_STATE} from "../state";
import rootReducer from '../reducer';

let composeEnhancers = compose;
const reduxDevToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

if (process.env.NODE_ENV === 'development' && reduxDevToolsEnhancer) {
    composeEnhancers = reduxDevToolsEnhancer;
}

const middleware = [];


export default function createAppStore () {
    const enhancer = composeEnhancers(applyMiddleware(...middleware));

    let initialState = { ...DEFAULT_APP_STATE};
    return createStore(rootReducer, initialState, enhancer)
};
