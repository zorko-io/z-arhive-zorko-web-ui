import { all } from 'redux-saga/effects'
import watchSpecs from './specs'
import watchErrors from './error'
import watchLocation from './location'

export default function* watchAllSagas() {
  yield all([watchSpecs(), watchErrors(), watchLocation()])
}
