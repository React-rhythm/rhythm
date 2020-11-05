import {LOADMSGDATA} from "./actionTypes"
import http from '@u/http.js'

const loadMsgDataSync = (list) => {
    return {
        type:LOADMSGDATA,
        list
    }
}

const loadMsgDataAsync = () => {
    return async (dispatch) => {
      // let result = await http.gett({
      //   url: "http://localhost:8080/msgList"
      // })
      // dispatch(loadMsgDataSync(result.data.info))
    }
  }

export default {
    loadMsgDataSync,
    loadMsgDataAsync
}