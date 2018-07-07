import { put, take, select } from 'redux-saga/effects'
import { HOME_PAGE_INIT } from '../action/home'
import * as previews from '../selector/previews'
import { specLookupsRequest } from '../action'

export default function* watchHome() {
  while (true) {
    yield take(HOME_PAGE_INIT)
    const limit = yield select(previews.getLimit)
    const offset = yield select(previews.getOffset)
    yield put(specLookupsRequest({ limit, offset }))
  }
}
