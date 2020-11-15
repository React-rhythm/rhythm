import {LOADMSGDATA,SAVETONAME,SAVEOPPSITESTATUS,SAVEOPPSITEMSGLIST} from "./actionTypes"

const defaultState = {
    list:[],
    toName:"",
    oppsiteStatus,
    oppsiteMsgList
}

const reducer = (state = defaultState,action) => {
   
    switch(action.type){
        case LOADMSGDATA: 
            return {
                list:action.list
            }
        case SAVETONAME :
            return {
                toName:action.toName
            }
        case SAVEOPPSITESTATUS :
            return {
                oppsiteStatus:action.oppsiteStatus
            }
        case SAVEOPPSITEMSGLIST :
            return {
                oppsiteMsgList:action.oppsiteMsgList
            }
        default:
            return state
    }
}

export default reducer