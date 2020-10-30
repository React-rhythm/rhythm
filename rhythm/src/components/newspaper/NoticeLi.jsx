import React from 'react'
import { LiWrap } from './styledNoticeList'

export default function NoticeLi(props) {
  let {item}=props
  console.log(item)
  return (
    <LiWrap 
    onClick={props.onGotoDetail(item.id)}
    >
      <div>
      <h2>公告名称:{item.title}</h2>
        <p>公告类别:{item.type} </p>
        <p>当事人:<span>{item.people} </span></p>
        <p>案号:{item.case} </p>
      </div>
      <img src={item.img} alt=""/>
    </LiWrap>
  )
}
