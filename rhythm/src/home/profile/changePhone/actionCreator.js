import {GETPHONEID} from "./actionTypes"

const getphoneid = phoneid => {
    return {
        type:GETPHONEID,
        phoneid
    }
}

export default {
    getphoneid
}
