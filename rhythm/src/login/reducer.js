import { LOADDATA } from './actionTypes'

const defaultState = {
  list: [],
  judgeForm:{
    name:'',
    userName:'',
    court:'',
    phoneName:'',
    verificationCode:'',
    password:'',
    repassword:''

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
            name:action.name
          }
        }
        case 'changeUserName':
        return{
          judgeForm:{
            ...state.judgeForm,
            userName:action.userName
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
            phoneName:action.phoneName
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
            repassword:action.repassword
          }
        }
    default:
      return state
  }
}

export default reducer