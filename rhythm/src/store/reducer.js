import { combineReducers } from 'redux'

import  { reducer as newspaper }  from '../newspaper'

const reducer =combineReducers({
  newspaper
})

export default reducer