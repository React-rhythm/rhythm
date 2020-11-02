import { change_Notice,change_Tab } from './actionType'

const defaultState={
  tabType:'redTab',
  noticeType:0
}

const reducer=(state=defaultState,action)=>{
  switch(action.type){
    case change_Tab:
      return{
        ...state,
        tabType:action.newType
      }
    case change_Notice:
      return{
        ...state,
        noticeType:action.newType
      }
    default:
      return state
  }
}

export default reducer