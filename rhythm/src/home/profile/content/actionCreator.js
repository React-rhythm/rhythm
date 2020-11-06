import {CHANGEPUSHNOTICE,CHANGEROLES} from "./actionTypes"

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

export default {
    changeNoticeStatus,
    changeRoles
}
