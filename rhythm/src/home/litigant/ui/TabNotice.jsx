import React,{Component} from 'react'

import { Tabs, Badge } from 'antd-mobile';

// import NoticeItem from "@c/notice/NoticeItem"
import NoticeItem from "@/home/litigant/ui/NoticeItem"
import _ from 'lodash'

class TabNotice extends Component{
    state = {
        tabs :[
            { title: <Badge>待付费</Badge> },
            { title: <Badge>付费待公告</Badge> },
            { title: <Badge>已公告</Badge> }
          ]
    }
    render(){
        const litigantList = this.props.litigantList
       
        const list = _.filter(litigantList,function(notice) {return notice.state==="1"})
      
        const listing = _.filter(litigantList,function(notice) {return notice.state===null})
       console.log(listing)
        const noticedList = _.filter(litigantList,function(notice) {return notice.noticeStatus==="1"})
       
        return (
            <>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }
                >
                    <div className="tabContentList">
                        {
                            list.length>0 && list.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value.caseid}></NoticeItem>
                                )
                            })
                        }
                      
                    </div>
                    <div className="tabContentList">
                    {
                            listing.length>0 && listing.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value.caseid}></NoticeItem>
                                )
                            })
                        }
                    </div>
                    <div className="tabContentList">
                    {
                            noticedList.length>0 && noticedList.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value.caseid}></NoticeItem>
                                )
                            })
                        }
                    </div>
                </Tabs>
          </>
        )
    }
   
}

export default  TabNotice

