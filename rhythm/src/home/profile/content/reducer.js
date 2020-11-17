import {CHANGEPUSHNOTICE,CHANGEROLES,GETSELFNAME} from "./actionTypes"

const defaultState = {
    isShow:false,
    roles:"",
    phoneid:"",
    selfName:""
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
        case GETSELFNAME:
            return {
                selfName:action.selfName
            }
        default:
            return state
    }
}

export default reducer