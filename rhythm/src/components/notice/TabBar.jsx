import React,{Component} from 'react'

import { Tabs, Badge } from 'antd-mobile';
import {TabBarWrap} from "./StyledNotice"
import NoticeItem from "./NoticeItem"

export default class Header extends Component{
    state = {
        tabs :[
            { title: <Badge>已读消息1</Badge> },
            { title: <Badge>未读消息</Badge> }
          ]
    }
    render(){
        return (
            <TabBarWrap>
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className="tabContentList">
                        <NoticeItem></NoticeItem>
                        <NoticeItem></NoticeItem>
                        <NoticeItem></NoticeItem>
                        <NoticeItem></NoticeItem>
                        <NoticeItem></NoticeItem>
                        <NoticeItem></NoticeItem>
                    </div>
                    <div className="tabContentList">
                        <NoticeItem></NoticeItem>
                        <NoticeItem></NoticeItem>
                    </div>
                </Tabs>
          </TabBarWrap>
        )
    }
}