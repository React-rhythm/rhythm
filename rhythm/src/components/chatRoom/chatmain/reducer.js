import {GETUSERNAME,LOADMSGDATA} from "./actionTypes"

const defaultState = {
    username:"",
    name:""
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
        default:
            return state
    }
}

export default reducer