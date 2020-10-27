import React,{Component} from 'react'
import { List, InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import Header from "@c/notice/Header.jsx"

import Phone from "@a/images/iphone@2x.png"
import {Container} from "./StyledChangePhone"


class Change extends Component{
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
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('code')}
                        type="code"
                        placeholder="请输入验证码"
                        extra={<div>获取验证码</div>}
                    ></InputItem>
                    </List>
                    <Button type="primary" >确认</Button>
                    <div className="remind">一个月内只允许更换一次手机号</div>
                </Container>
            </>
        )
    }
}

const ChangePhone = createForm()(Change);
export default  ChangePhone
