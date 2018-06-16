import {takeLatest, call, put} from 'redux-saga/effects';
import * as Api from "../api";
import {SPEC_LOOKUPS_REQUEST, specLookupsSet} from "../action";

export function* fetchSpecLookup() {
    try {
        const specLookups = yield call(Api.fetchSpecLookups);
        yield put(specLookupsSet(specLookups));
    } catch (e) {
        console.error(e);
    }
}

export default function* watchSpecs() {
  yield takeLatest(SPEC_LOOKUPS_REQUEST, fetchSpecLookup)
}
