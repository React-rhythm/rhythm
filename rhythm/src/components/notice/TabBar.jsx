import React,{Component} from 'react'

import { Tabs, Badge } from 'antd-mobile';
import {TabBarWrap} from "./StyledNotice"
import NoticeItem from "./NoticeItem"
import _ from 'lodash'

class TabBar extends Component{
    state = {
        tabs :[
            { title: <Badge>已读消息</Badge> },
            { title: <Badge>未读消息</Badge> }
          ]
    }
    render(){
        const list = _.filter(this.props.list,function(notice) {return notice.status==="已公告"})
        
        const listing = _.filter(this.props.list,function(notice) {return notice.status==="未公告"})
       
        return (
            <TabBarWrap>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className="tabContentList">
                        {
                            list.length>0 && list.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value._id}></NoticeItem>
                                )
                            })
                        }
                    </div>
                    <div className="tabContentList">
                    {
                            listing.length>0 && listing.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value._id}></NoticeItem>
                                )
                            })
                        }
                    </div>
                </Tabs>
          </TabBarWrap>
        )
    }
   
}

export default  TabBar