import {SAVETONAME,SAVEOPPSITESTATUS,SAVEOPPSITEMSGLIST} from "./actionTypes"
import http from '@u/http.js'

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
    saveToName,
    saveOppsiteStatus,
    saveOppsiteMsgList
}