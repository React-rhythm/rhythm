import { LOADDATA } from './actionTypes'

const defaultState = {
  list: [],
  judgeForm:{
    idcard:'',
    password:'',
    phineid:'',
    photoaddress:'',
    realname:'',
    replynewpassword:'',
    username:'',
    status:'',
    uuid:'string'

  }
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        list: action.list
      }
      case 'changeName':
        return{
          judgeForm:{
            ...state.judgeForm,
            realname:action.realname
          }
        }
        case 'changeUserName':
        return{
          judgeForm:{
            ...state.judgeForm,
            username:action.username
          }
        }
        case 'changeCourt':
        return{
          judgeForm:{
            ...state.judgeForm,
            court:action.court
          }
        }
        case 'changePhoneNumber':
        return{
          judgeForm:{
            ...state.judgeForm,
            phoneid:action.phoneid
          }
        }
        case 'changeVerificationCode':
        return{
          judgeForm:{
            ...state.judgeForm,
            verificationCode:action.verificationCode
          }
        }
        case 'changePassword':
        return{
          judgeForm:{
            ...state.judgeForm,
            password:action.password
          }
        }
        case 'changeRepassword':
        return{
          judgeForm:{
            ...state.judgeForm,
            replynewpassword:action.replynewpassword
          }
        }
    default:
      return state
  }
}

export default reducer