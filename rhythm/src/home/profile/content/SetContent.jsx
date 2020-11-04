import React,{Component} from 'react'

import {ProfileContentWrap} from "../StyledProfile"

import {withRouter} from "react-router-dom"

import { List,Modal} from 'antd-mobile';
const Item = List.Item;
const alert = Modal.alert;

@withRouter
class ProfileContent extends Component{
    state = {
        disabled: false,
      }
      handleQuitLogin = () => {
        window.localStorage.removeItem("token")
      }
    render() {
        return (<ProfileContentWrap>
          
          <List>
            <Item
              arrow="horizontal"
              onClick={() => {this.props.history.push("/updateusername",{title:"修改用户名",headbg:"#fff",color:"#000",right:true})}}
            >修改用户名</Item>
            <Item
              onClick={() =>{this.props.history.push("/resetpwd",{title:"密码重置",headbg:"#fff",color:"#000"})}}
              arrow="horizontal"
            >
              密码重置
            </Item>
            <Item
              arrow="horizontal"
              onClick={() => {this.props.history.push("/changephone",{title:"更换手机号",headbg:"#fff",color:"#000"})}}
            >更换手机号</Item>
            <Item
              onClick={() =>
                alert('提示', '确认退出登录?', [
                  { text: '取消', onPress: () => console.log('cancel') },
                  { text: '确定', onPress: this.handleQuitLogin },
                ])
              }
              arrow="horizontal"
            >
              退出登录
            </Item>
          </List>
        </ProfileContentWrap>);
      }
    }

  export default ProfileContent
