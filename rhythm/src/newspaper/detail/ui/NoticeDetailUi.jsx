import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import NoticeDetail from '@c/newspaper/NoticeDetail'
import { useHistory } from 'react-router-dom'

export default function NoticeDetailUi() {
  const {goBack} =useHistory()
  const backClickHandler=()=>{
    goBack()
  }
  return (
    <div>
       <NavBar
          mode="dark"
          style={{backgroundColor:"#fff",color:"#000"}}
          icon={<Icon type="left" onClick={backClickHandler} />}>
          公告详情
       </NavBar>
       <NoticeDetail></NoticeDetail>
    </div>
  )
}
