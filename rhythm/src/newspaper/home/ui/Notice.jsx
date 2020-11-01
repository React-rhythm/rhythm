import React from 'react'

import { Tabs } from 'antd-mobile';
import NoticeList from '@c/newspaper/NoticeList'
import { useHistory } from 'react-router-dom'

import { useSelector,useDispatch } from 'react-redux'
import { actionCreator as ac } from '../../home'

const tabs = [
  { title:'待公告'},
  { title: '已公告'},
];


const Notice = (props) => {
  const {push} =useHistory()
  const noticeType = useSelector(state => state.newspaper.noticeType)
  const dispatch = useDispatch()
  const gotoDetail=(id)=>{
    return ()=>{
      push({
        pathname:'/noticedetail',
        state:{id}
      })
    }
  }
  const noticedList=props.list && props.list.map(item=>{
    return {
        id:item.id,
        date:item.date,
        list:item.list.filter(item2=>{
        return item2.isNoticed===1
      })
    }
  })
  const noNoticedList=props.list && props.list.map(item=>{
      return {
        id:item.id,
        date:item.date,
        list:item.list.filter(item2=>{
        return item2.isNoticed===0
      })
    }
  })
  return(
  <div>
    <Tabs tabs={tabs}
      initialPage={noticeType}
      onChange={(tab, index) => {
        dispatch(ac.changeNotice(index))
      }}
    >
      <div style={{ height: '5.3rem'}}>
        <NoticeList list={noNoticedList} onGotoDetail={gotoDetail}></NoticeList>
      </div>
      <div style={{ height: '5.3rem'}}>
        <NoticeList list={noticedList} onGotoDetail={gotoDetail}></NoticeList>
      </div>
     
    </Tabs>
    
  </div>
)}


export default Notice
