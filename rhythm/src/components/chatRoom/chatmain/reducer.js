import {GETUSERNAME,LOADMSGDATA,ISONLINE} from "./actionTypes"

const defaultState = {
    username:"",
    name:"",
    isOnline:""
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case GETUSERNAME :
            return {
                username:action.username
            }
        case LOADMSGDATA: 
            return {
                name:action.name
            }
        case ISONLINE :
            return {
                isOnline:action.isOnline
            }
        default:
            return state
    }
}

export default reducer