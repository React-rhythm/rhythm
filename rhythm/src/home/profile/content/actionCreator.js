import {CHANGEPUSHNOTICE} from "./actionTypes"

const changeNoticeStatus = isShow => {
    return {
        type:CHANGEPUSHNOTICE,
        isShow
    }
}

export default {
    changeNoticeStatus
}
