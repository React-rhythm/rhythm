import {GETUSERNAME} from "./actionTypes"

const defaultState = {
    username:""
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case GETUSERNAME :
            return {
                username:action.username
            }
        default:
            return state
    }
}

export default reducer