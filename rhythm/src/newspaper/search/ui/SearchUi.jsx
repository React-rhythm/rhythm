import React from 'react'
import { NavBar } from 'antd-mobile';
import SearchInput from './SearchInput'
import SearchNotice from './SearchNotice'

export default function SearchUi(props) {
  // console.log(props)
  return (
    <div>
     <NavBar
      mode="dark"
       >搜索</NavBar>
     <SearchInput {...props} ></SearchInput>
     <SearchNotice {...props}></SearchNotice>
    </div>
  )
}
