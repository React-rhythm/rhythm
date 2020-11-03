import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actionCreator as ac} from "@h/content"
import Header from "@c/notice/Header"
import SetContent from "./SetContent"
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

@connect(state=>({
  isShow:state.notice.isShow
}),dispatch=>({
  changeNotice(isShow){
    dispatch(ac.changeNoticeStatus(isShow))
  }
}))
class SwitchExample extends Component {
  render() {
    // console.log(this.props)
    return (
        <>
           <Header>设置</Header> 
           <List>
                <List.Item
                extra={<Switch
                    checked={this.props.isShow}
                    onChange={() => {
                      this.props.changeNotice(!this.props.isShow)
                    }}
                />}
                >消息推送</List.Item>
            </List>
            <SetContent></SetContent>
        </>
    )
  }
}

const Se = createForm()(SwitchExample);
export default Se
