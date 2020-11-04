import React,{Component} from 'react'
import { List, InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import Header from "@c/notice/Header.jsx"

import Phone from "@a/images/iphone@2x.png"
import {Container} from "./StyledChangePhone"

import http from "@u/http"

class Change extends Component{

    state={
        phoneid:"",
        uuid:"",
    }
    handlePutPhoneKeyUp = () => {
        return (e) => {
            this.setState({
                phoneid:e
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
        const phoneid = this.state.phoneid
        const findPhoneRes = await http.get(`http://123.57.109.224:8081/userInfo/register/phone/${phoneid}`)
        if(findPhoneRes.flag){
            const result = await http.get(`http://123.57.109.224:8081/userInfo/phoneUpdate/${phoneid}`)
            console.log(result)
        }else{
            alert("请输入正确的手机号")
        }
    }
    handleResetPhone = async() => {
        const result = await http.post('http://10.9.70.205:8081/userInfo/register/phone',this.state)
        console.log(result)
    }

    render(){
        const { getFieldProps } = this.props.form;
        return (
            <>
                <Header></Header>
                <Container>
                    <div className="logoPhone">
                        <img src={Phone} alt=""/>
                    </div>
                    <div className="phoneNumber">
                        <p>您当前的手机号为<span>132****3285</span></p>
                        <p>更改后个人信息不变，可以使用新手机登录</p>
                    </div>
                    <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="请输入手机号"
                        value={this.state.phoneid}
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
