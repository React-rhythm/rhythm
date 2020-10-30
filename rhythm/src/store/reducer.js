import { combineReducers } from 'redux'
import {reducer as MsgDetail} from "@h/"
import {reducer as publish} from '../home/publish/'
const reducer = combineReducers({
    MsgDetail,
    publish
})

export default reducer