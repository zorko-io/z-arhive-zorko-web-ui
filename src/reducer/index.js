import { combineReducers } from 'redux'
import previews from './previews'
import specs from './specs'
import error from './error'

const rootReducer = combineReducers({
  specs,
  previews,
  error
})

export default rootReducer
