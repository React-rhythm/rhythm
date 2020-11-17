import {CHANGEPUSHNOTICE,CHANGEROLES,GETSELFNAME} from "./actionTypes"

const changeNoticeStatus = isShow => {
    return {
        type:CHANGEPUSHNOTICE,
        isShow
    }
}

const changeRoles = roles => {
    return {
        type:CHANGEROLES,
        roles
    }
}
const getSelfName = (selfName) => {
    return {
        type:GETSELFNAME,
        selfName
    }
}


export default {
    changeNoticeStatus,
    changeRoles,
    getSelfName
}
