import React from 'react'
import { NoticeDetailWrap,SpanWrap } from './styledNoticeList'
import {useHistory} from "react-router-dom"


export default function NoticeDetail(props) {
  const history = useHistory()
    console.log(history.location.state)
  return (
    <NoticeDetailWrap>
      <div className='container'>
        <div>
          <h2>版面照片:</h2>
          <div >
            <img src="http://via.placeholder.com/60x80" alt=""/>
            <img src="http://via.placeholder.com/60x80" alt=""/>
            <img src="http://via.placeholder.com/60x80" alt=""/>
          </div>
        </div>
        <div className='info'>
          <h2>公告类别:</h2>
          <SpanWrap
          width="0 0 1px 0">开庭传票</SpanWrap>
        </div>
        <div className='info'>
          <h2>法院名称:</h2>
          <SpanWrap
          width="0 0 1px 0">北京朝阳第一人民法院</SpanWrap>
        </div>
        <div className='info'>
          <h2>案件号:</h2>
          <SpanWrap
          width="0 0 1px 0">(2017)桂0602民初668号</SpanWrap>
        </div>
        <div className='info'>
          <h2>当事人:</h2>
          <SpanWrap
          width="0 0 1px 0">欧阳三三</SpanWrap>
        </div>
        <div className='info'>
          <h2>公告进展:</h2>
          <SpanWrap
          width="0 0 1px 0">开庭传票</SpanWrap>
        </div>
      </div>
        <button>去支付</button>
    </NoticeDetailWrap>
  )
}
