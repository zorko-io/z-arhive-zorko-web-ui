import {takeLatest, call} from 'redux-saga/effects';
import * as Api from "../api";
import {SPEC_LOOKUPS_REQUEST} from "../action";

export function* fetchSpecLookup() {
    try {
        const specLookups = yield call(Api.fetchSpecLookups);
    } catch (e) {
        console.error(e);
    }
}

export default function* watchSpecs() {
  yield takeLatest(SPEC_LOOKUPS_REQUEST, fetchSpecLookup)


}
