import {createStore} from 'redux';
import {DEFAULT_APP_STATE} from "../state";
import rootReducer from '../reducer';

export default function createAppStore () {
    return createStore(rootReducer, { ...DEFAULT_APP_STATE})
};
