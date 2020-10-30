import { combineReducers } from 'redux'

import {
  reducer as login
} from '../login'


const reducer = combineReducers({
  login
})

export default reducer

