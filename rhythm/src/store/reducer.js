import { combineReducers } from 'redux'

import { reducer as login} from '../login'


import {reducer as MsgDetail} from "@h/"
import {reducer as publish} from '../home/publish/'

import  { reducer as newspaper }  from '../newspaper'
import {reducer as pay} from '../home/pay/index'

import {reducer as notice} from "@h/content"
import {reducer as changephone} from "@h/changePhone"

import {reducer as getusername} from "@c/chatRoom/chatmain"


const reducer = combineReducers({
    MsgDetail,
    publish,
    newspaper,
    pay,
    notice,
    login,
    changephone,
    getusername

})

export default reducer
