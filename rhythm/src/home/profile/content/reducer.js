import {CHANGEPUSHNOTICE} from "./actionTypes"

const defaultState = {
    isShow:true
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case CHANGEPUSHNOTICE :
            return {
                isShow:action.isShow
            }
        default:
            return state
    }
}

export default reducer