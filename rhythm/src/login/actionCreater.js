import { LOADDATA } from './actionTypes'

// import { get } from '@u/http.js'

const loadDataSync = list => {
  return {
    type: LOADDATA,
    list
  }
}

const changeName=(realname)=>{
  return{
    type:'changeName',
    realname
  }
}
const changeUserName=(username)=>{
  return{
    type:'changeUserName',
    username
  }
}
const changeCourt=(court)=>{
  return{
    type:'changeCourt',
    court
  }
}

const changePhoneId=(phoneid)=>{
  return{
    type:'changePhoneId',
    phoneid
  }
}

const changeVerificationCode=(verificationCode)=>{
  return{
    type:'changeVerificationCode',
    verificationCode
  }
}
const changePassword=(password)=>{
  return{
    type:'changePassword',
    password
  }
}

const changereplaynewpassword=(replynewpassword)=>{
  return{
    type:'changeRepassword',
    replynewpassword
  }
}

//ajax请求数据
// const loadDataAsync = () => {
//   return async (dispatch) => {
//     let result = await get({
//       url: '/api/list'
//     })
//     dispatch(loadDataSync(result.data.data))
//   }
// }

export default {
  loadDataSync,
  // loadDataAsync,
  changeName,
  changeCourt,
  changePassword,
  changePhoneId,
  changeUserName,
  changeVerificationCode,
  changereplaynewpassword
}