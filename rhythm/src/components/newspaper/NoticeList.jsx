import React from 'react'
import NoticeLi from './NoticeLi'
import { NoticeListWrap } from './styledNoticeList'

export default function NoticeList(props) {
  console.log(props);
  return (
    <NoticeListWrap>
      {
        props.list &&props.list.map(item=>{
          //  if(!item.list) return null
           return (
            // <ul key={item.id}>
            //   <span>{item.date}</span>
            //   {
            //     item.list.map(item2=>{
            //       return(
            //         <NoticeLi key={item2.id} item={item2} {...props}></NoticeLi>
            //       )
            //     })
            //   }
            // </ul>
            <NoticeLi key={item.caseid} item={item} {...props}></NoticeLi>
          )
        })
      }
    </NoticeListWrap>
  )
}
