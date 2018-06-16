import {all} from 'redux-saga/effects';
import watchSpecs from './specs';

export default function* watchAllSagas() {
    yield all([
        watchSpecs()
    ]);
}
