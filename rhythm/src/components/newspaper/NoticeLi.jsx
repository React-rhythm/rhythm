import React from 'react'
import { LiWrap } from './styledNoticeList'

export default function NoticeLi(props) {
  console.log(props);
  let {item}=props
  item=item[0]
  return (
    <LiWrap 
    onClick={props.onGotoDetail(item.caseid)}
    >
      <div>
      <h2>公告名称:{item.noticename}</h2>
        <p>公告类别:{item.type} </p>
        <p>当事人:<span>{item.party} </span></p>
        <p>案号:{item.caseid} </p>
      </div>
      <img src={item.picture} alt=""/>
    </LiWrap>
  )
}
