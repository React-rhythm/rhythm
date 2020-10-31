import { combineReducers } from 'redux'
import {reducer as msgdetail} from "@h/"
import {reducer as publish} from '../home/publish/'
import {reducer as pay} from '../home/pay/index'
const reducer = combineReducers({
    publish,
    msgdetail,
    pay,
})

export default reducer