<<<<<<< HEAD
=======
import React,{Component} from 'react'

import {ProfileContentWrap} from "./StyledProfile"
import Msg from "@a/images/xiaoxi@2x.png"
import Related from "@a/images/guanyu@2x.png"
import CallService from "@a/images/kefu@2x.png"
import NewsPaper from "@a/images/baoshe@2x.png"
import Setting from "@a/images/shezhi@2x.png"
import { List } from 'antd-mobile';

import {withRouter} from "react-router-dom"


const Item = List.Item;

@withRouter
class ProfileContent extends Component{
    state = {
        disabled: false,
      }
    render() {
        return (<ProfileContentWrap>
          
          <List>
            <Item
              thumb={Msg}
              arrow="horizontal"
              onClick={() => {this.props.history.push("/notice",{title:"报社"})}}
            >消息通知</Item>
            <Item
              thumb={Related}
              arrow="horizontal"
              onClick={() => {this.props.history.push("/about",{title:"关于律动公告",headbg:"#fff",color:"#000"})}}
            >
              关于律动公告
            </Item>
            <Item
              thumb={CallService}
              arrow="horizontal"
              onClick={() => {}}
            >客服</Item>
            <Item
              thumb={NewsPaper}
              onClick={() => {this.props.history.push("/notice",{title:"报社"})}}
              arrow="horizontal"
            >
              报社
            </Item>
            <Item
              thumb={Setting}
              onClick={() => {this.props.history.push("/setting",{title:"设置"})}}
              arrow="horizontal"
            >
              设置
            </Item>
          </List>
        </ProfileContentWrap>);
      }
    }


  export default  ProfileContent
>>>>>>> done
