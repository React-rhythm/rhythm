import {LOADMSGDATA,SAVETONAME,SAVEOPPSITESTATUS,SAVEOPPSITEMSGLIST} from "./actionTypes"
import http from '@u/http.js'

const loadMsgDataSync = (list) => {
    return {
        type:LOADMSGDATA,
        list
    }
}

const loadMsgDataAsync = () => {
    return async (dispatch) => {
      let result = await http.gett({
        url: "http://localhost:8080/msgList"
      })
      dispatch(loadMsgDataSync(result.data.info))
    }
  }

const saveToName = toName => {
  return {
      type:SAVETONAME,
      toName
  }
}
const saveOppsiteStatus = oppsiteStatus => {
  return {
      type:SAVEOPPSITESTATUS,
      oppsiteStatus
  }
}
const saveOppsiteMsgList = oppsiteMsgList => {
  return {
      type:SAVEOPPSITEMSGLIST,
      oppsiteMsgList
  }
}

export default {
    loadMsgDataSync,
    loadMsgDataAsync,
    saveToName,
    saveOppsiteStatus,
    saveOppsiteMsgList
}