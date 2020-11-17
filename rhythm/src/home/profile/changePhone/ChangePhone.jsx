import React,{Component} from 'react'
import {connect} from "react-redux"
import { List, InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import Header from "@c/notice/Header.jsx"

import Phone from "@a/images/iphone@2x.png"
import {Container} from "./StyledChangePhone"

import http from "@u/http"

@connect(state=>({
    phoneid:state.changephone.phoneid
  }))
class Change extends Component{
    
    state={
        newPhoneid:"",
        uuid:"",
    }
    handlePutPhoneKeyUp = () => {
        return (e) => {
            this.setState({
                newPhoneid:e
            })
        }
    }
    handlePutCode = () => {
        return (e) => {
            this.setState({
                uuid:e
            })
        }
    }
    handleGetCodeClick = async() => {
        const findPhoneRes = await http.get(`http://localhost:8080/userInfo/register/resetPwd/${this.props.phoneid}`)
        console.log(findPhoneRes)
        // if(!findPhoneRes.flag){
        //     alert("请输入正确的手机号")
        // }
    }
    handleResetPhone = async() => {
        const {newPhoneid,uuid} = this.state
        const token =window.localStorage.getItem("token")
        const obj = {phoneid:this.props.phoneid,uuid,newPhoneid,token}
        const result = await http.post('http://localhost:8080/userInfo/phoneUpdate',JSON.stringify(obj))
        console.log(result)
    }

    render(){
        const { getFieldProps } = this.props.form;
        console.log(this.props)
        let mobile = this.props.phoneid;
        let regmobile = /^(\d{3})\d{4}(\d{4})$/;
        let replaceResult = mobile.trim().replace(regmobile,"$1****$2")
        return (
            <>
                <Header></Header>
                <Container>
                    <div className="logoPhone">
                        <img src={Phone} alt=""/>
                    </div>
                    <div className="phoneNumber">
                        <p>您当前的手机号为<span>{replaceResult}</span></p>
                        <p>更改后个人信息不变，可以使用新手机登录</p>
                    </div>
                    <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="text"
                        placeholder="请输入手机号"
                        value={this.state.newPhoneid}
                        onChange={this.handlePutPhoneKeyUp()}
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('code')}
                        type="code"
                        placeholder="请输入验证码"
                        value={this.state.uuid}
                        onChange={this.handlePutCode()}
                        extra={<div onClick={this.handleGetCodeClick}>获取验证码</div>}
                    ></InputItem>
                    </List>
                    <Button type="primary" onClick={this.handleResetPhone}>确认</Button>
                    <div className="remind" >一个月内只允许更换一次手机号</div>
                </Container>
            </>
        )
    }
}

const ChangePhone = createForm()(Change);
export default  ChangePhone
