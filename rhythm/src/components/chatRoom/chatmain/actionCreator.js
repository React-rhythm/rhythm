import {LOADMSGDATA,GETUSERNAME} from "./actionTypes"

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
export default {
    getusername,
    loadMsgtName
}
