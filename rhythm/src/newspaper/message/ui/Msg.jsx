import React from 'react'

import { Tabs } from 'antd-mobile';
import MsgList from '@c/newspaper/MsgList'

const tabs = [
  { title:'已读消息'},
  { title: '未读消息'},

];


const Msg = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => {  }}
      onTabClick={(tab, index) => {  }}
    >
      <div style={{ height: '5.3rem'}}>
        <MsgList></MsgList>
      </div>
      <div style={{ height: '5.3rem'}}>
        <MsgList></MsgList>
      </div>
     
    </Tabs>
    
  </div>
);
export default Msg
