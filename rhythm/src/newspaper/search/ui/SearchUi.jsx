import React from 'react'
import { NavBar } from 'antd-mobile';
import SearchInput from './SearchInput'
import SearchNotice from './SearchNotice'

export default function SearchUi(props) {
  console.log(props)
  return (
    <div>
     <NavBar
      mode="dark"
       >搜索</NavBar>
      <SearchInput {...props} ></SearchInput>
       {
         props.list[0]==='没有搜索到该案号' ? <div>没有搜索到该案号</div> :
         <SearchNotice {...props}></SearchNotice>
       }
    </div>
  )
}
