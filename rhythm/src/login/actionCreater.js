import { LOADDATA } from './actionTypes'

import { get } from '@u/http.js'

const loadDataSync = list => {
  return {
    type: LOADDATA,
    list
  }
}

const changeName=(name)=>{
  return{
    type:'changeName',
    name
  }
}
const changeUserName=(userName)=>{
  return{
    type:'changeUserName',
    userName
  }
}
const changeCourt=(court)=>{
  return{
    type:'changeCourt',
    court
  }
}

const changePhoneNumber=(phoneNumber)=>{
  return{
    type:'changePhoneNumber',
    phoneNumber
  }
}

const changeVerificationCode=(verificationcode)=>{
  return{
    type:'changeVerificationCode',
    verificationcode
  }
}
const changePassword=(password)=>{
  return{
    type:'changePassword',
    password
  }
}

const changeRepassword=(repassword)=>{
  return{
    type:'changeRepassword',
    repassword
  }
}

//ajax请求数据
const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await get({
      url: '/api/list'
    })
    dispatch(loadDataSync(result.data.data))
  }
}

export default {
  loadDataSync,
  loadDataAsync,
  changeName,
  changeCourt,
  changePassword,
  changePhoneNumber,
  changeUserName,
  changeVerificationCode,
  
}