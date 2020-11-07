import {GETPHONEID} from "./actionTypes"

const defaultState = {
    phoneid:""
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case GETPHONEID :
            return {
                phoneid:action.phoneid
            }
        default:
            return state
    }
}

export default reducer