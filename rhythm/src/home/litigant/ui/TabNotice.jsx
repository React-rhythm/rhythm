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
        console.log(this.props)
        const list = _.filter(this.props.list,function(notice) {return notice.status==="已公告"})
        
        const listing = _.filter(this.props.list,function(notice) {return notice.status==="未公告"})
       
        return (
            <>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }
                >
                    <div className="tabContentList">
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        {/* {
                            list.length>0 && list.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value._id}></NoticeItem>
                                )
                            })
                        } */}
                      
                    </div>
                    <div className="tabContentList">
                    {/* {
                            listing.length>0 && listing.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value._id}></NoticeItem>
                                )
                            })
                        } */}
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                       
                    </div>
                    <div className="tabContentList">
                    {/* {
                            listing.length>0 && listing.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value._id}></NoticeItem>
                                )
                            })
                        } */}
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                        <NoticeItem ></NoticeItem>
                    </div>
                </Tabs>
          </>
        )
    }
   
}

export default  TabNotice

