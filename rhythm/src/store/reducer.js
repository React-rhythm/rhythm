import { combineReducers } from 'redux'
import {reducer as MsgDetail} from "@h/"
import {reducer as publish} from '../home/publish/'

import  { reducer as newspaper }  from '../newspaper'
import {reducer as pay} from '../home/pay/index'

const reducer = combineReducers({
    MsgDetail,
    publish,
    newspaper,
    pay,

})

export default reducer