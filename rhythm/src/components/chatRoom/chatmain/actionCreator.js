import {GETUSERNAME} from "./actionTypes"

const getusername = username => {
    return {
        type:GETUSERNAME,
        username
    }
}

export default {
    getusername
}
