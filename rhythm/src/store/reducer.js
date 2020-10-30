import { combineReducers } from 'redux'
import {reducer as MsgDetail} from "@h/"
import {reducer as publish} from '../home/publish/'
import  { reducer as newspaper }  from '../newspaper'

const reducer = combineReducers({
    MsgDetail,
    publish,
    newspaper
})

export default reducer