import React,{useEffect,useState} from 'react'
import { NoticeDetailWrap,SpanWrap } from './styledNoticeList'
import {useHistory} from "react-router-dom"
import http from '@u/http'


export default function NoticeDetail(props) {
  let [notice,setNotice]=useState({})
  const history = useHistory()
  const state=history.location.state
  console.log(state);
  const goToPay=()=>{
    history.push({
      pathname:'/pay',
      state
  })
}
  useEffect(()=>{
    async function loadData(){
      let result=await http.gett(
        `http://114.67.247.63:8010/searchInfo/byCaseIdAndName/${state.caseid}`
      )
      console.log(result);
      console.log(state)
      result.data.SearchDto && setNotice(result.data.SearchDto[0])
    }
      loadData()
  },[])
  return (
    <>
   {
     Object.keys(notice)!==0 &&  <NoticeDetailWrap>
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
         width="0 0 1px 0">{notice.type}</SpanWrap>
       </div>
       <div className='info'>
         <h2>法院名称:</h2>
         <SpanWrap
         width="0 0 1px 0">北京朝阳第一人民法院</SpanWrap>
       </div>
       <div className='info'>
         <h2>案件号:</h2>
         <SpanWrap
         width="0 0 1px 0">{notice.caseid}</SpanWrap>
       </div>
       <div className='info'>
         <h2>当事人:</h2>
         <SpanWrap
         width="0 0 1px 0">{notice.party}</SpanWrap>
       </div>
       <div className='info'>
         <h2>公告进展:</h2>
         <SpanWrap
         width="0 0 1px 0">开庭传票</SpanWrap>
       </div>
     </div>
       <button onClick={goToPay}>去支付</button>
   </NoticeDetailWrap>
   }
   </>
  )
}
