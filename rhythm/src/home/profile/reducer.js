import {LOADMSGDATA,SAVETONAME,SAVEOPPSITESTATUS,SAVEOPPSITEMSGLIST} from "./actionTypes"

const defaultState = {
    toName:"",
    oppsiteStatus:"",
    oppsiteMsgList:[]
}

const reducer = (state = defaultState,action) => {
   
    switch(action.type){
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