import {LOADMSGDATA,GETUSERNAME,ISONLINE} from "./actionTypes"

const getusername = username => {
    return {
        type:GETUSERNAME,
        username
    }
}
const loadMsgtName = (name) => {
    return {
        type:LOADMSGDATA,
        name
    }
}

const getIsOnLine = (isOnline) => {
    return {
        type:ISONLINE,
        isOnline
    }
}

export default {
    getusername,
    loadMsgtName,
    getIsOnLine
}
