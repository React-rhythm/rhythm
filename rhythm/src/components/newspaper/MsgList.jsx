import React from 'react'
import { MsgListWrap,P } from './styledNoticeList'

export default function MsgList() {
  return (
    <MsgListWrap>
      <ul>
        <li>
          <div>
            <h2>已登报</h2>
            <span>2017-5-23</span>
          </div>
          <P
          lc={3}>相关规律规定:最高人民法院《关于审理人身损害赔偿案件适用法律若干问题的解释》第六条:从事住宿,餐饮,娱乐等经营活动或者其他社会活动的自然人娱乐等经营活动或者其他社会活动的自然人娱乐等经营活动或者其他社会活动的自然人</P>
          <p>了解更多</p>
        </li>
      </ul>
    </MsgListWrap>
  )
}
