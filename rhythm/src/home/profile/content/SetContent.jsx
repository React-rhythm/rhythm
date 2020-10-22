import React,{Component} from 'react'

import {ProfileContentWrap} from "../StyledProfile"

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
              arrow="horizontal"
              onClick={() => {}}
            >修改用户名</Item>
            <Item
              onClick={() => {}}
              arrow="horizontal"
            >
              密码重置
            </Item>
            <Item
              arrow="horizontal"
              onClick={() => {}}
            >更换手机号</Item>
            <Item
              onClick={() => {}}
              arrow="horizontal"
            >
              退出登录
            </Item>
          </List>
        </ProfileContentWrap>);
      }
    }
