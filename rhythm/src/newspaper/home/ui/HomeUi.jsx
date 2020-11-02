import React from 'react'

import Notice from './Notice'

import { NavBar, Icon } from 'antd-mobile';

export default function HomeUi(props) {
  const {type,onChangeNotice,list}=props
  return (
    <div>
      <NavBar
      mode="dark"
      icon={<Icon type="left" />}>
         报社
       </NavBar>
       <div>
        <Notice type={type}
        onChangeNotice={onChangeNotice}
        list={list}
        ></Notice>
       </div>
    </div>
  )
}
