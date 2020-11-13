import {CHANGEPUSHNOTICE,CHANGEROLES} from "./actionTypes"

const defaultState = {
    isShow:true,
    roles:"",
    phoneid:""
}

const reducer = (state = defaultState,action) => {
    switch(action.type){
        case CHANGEPUSHNOTICE :
            return {
                isShow:action.isShow
            }
        case CHANGEROLES :
            return {
                roles:action.roles
            }
        default:
            return state
    }
}

export default reducer