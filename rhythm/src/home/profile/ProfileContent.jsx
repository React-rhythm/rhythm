import React,{Component} from 'react'

import {ProfileContentWrap} from "./StyledProfile"
import Msg from "@a/images/xiaoxi@2x.png"
import Related from "@a/images/guanyu@2x.png"
import CallService from "@a/images/kefu@2x.png"
import NewsPaper from "@a/images/baoshe@2x.png"
import Set from "@a/images/shezhi@2x.png"
import { List } from 'antd-mobile';
const Item = List.Item;

export default class ProfileContent extends Component{
    state = {
        disabled: false,
      }
    render() {
        return (<ProfileContentWrap>
          
          <List>
            <Item
              thumb={Msg}
              arrow="horizontal"
              onClick={() => {}}
            >消息通知</Item>
            <Item
              thumb={Related}
              onClick={() => {}}
              arrow="horizontal"
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
              onClick={() => {}}
              arrow="horizontal"
            >
              报社
            </Item>
            <Item
              thumb={Set}
              onClick={() => {}}
              arrow="horizontal"
            >
              设置
            </Item>
          </List>
        </ProfileContentWrap>);
      }
    }
