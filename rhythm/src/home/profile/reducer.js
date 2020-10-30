import {LOADMSGDATA} from "./actionTypes"

const defaultState = {
    list:[]
}

const reducer = (state = defaultState,action) => {
   
    switch(action.type){
        case LOADMSGDATA: 
            return {
                list:action.list
            }
        default:
            return state
    }
}

export default reducer