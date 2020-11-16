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
        console.log(this.props)
        const list = _.filter(this.props,function(notice) {return notice.flag===1})
        
        
        const listing = _.filter(this.props,function(notice) {return notice.flag===0})
        console.log(listing)

        return (
            <TabBarWrap>
                <Tabs tabs={this.state.tabs}
                    initialPage={1}
                >
                    <div className="tabContentList">
                        {
                            list.length>0 && list.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value.time}></NoticeItem>
                                )
                            })
                        }
                    </div>
                    <div className="tabContentList">
                    {
                            listing.length>0 && listing.map(value=>{
                                return (
                                    <NoticeItem notice={value} key={value.time}></NoticeItem>
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