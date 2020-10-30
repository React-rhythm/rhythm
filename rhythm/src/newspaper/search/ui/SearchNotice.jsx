import React from 'react'
// import SearchUl from './styledSearch'
import NoticeLi from '@c/newspaper/NoticeLi'
import { useHistory } from 'react-router-dom'
import {SearchNoticeWrap} from './styledSearch'


export default function SearchNotice(props) {
  const {push} =useHistory()
  const gotoDetail=(id)=>{
    return ()=>{
      push({
        pathname:'/notice',
        state:{id}
      })
    }
  }
  // console.log(props)
  return (
      <SearchNoticeWrap>
        <span>已经刊登的最新公告</span>
        {
          props.list && props.list.map(item=>{
            return(
              <NoticeLi item={item} onGotoDetail={gotoDetail} key={item.id}></NoticeLi>
            )
          })
        }
      </SearchNoticeWrap>
  )
}
