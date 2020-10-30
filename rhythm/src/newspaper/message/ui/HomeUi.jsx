import React from 'react'
import Msg from './Msg'
import { NavBar, Icon } from 'antd-mobile';

export default function HomeUi() {
  return (
    <div>
      <NavBar
      mode="dark"
      icon={<Icon type="left" />}
       >报社</NavBar>
       <div>
        <Msg></Msg>
       </div>
    </div>
  )
}
