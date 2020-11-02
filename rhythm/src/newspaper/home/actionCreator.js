import {
  change_Tab,
  change_Notice
} from './actionType'

const changeTab=newType=>{
  return {
    type:change_Tab,
    newType
  }
}

const changeNotice=newType=>{
  return {
    type:change_Notice,
    newType
  }
}
export default{
  changeTab,
  changeNotice
}