import React,{Component} from 'react'
import { List, InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import Header from "@c/notice/Header.jsx"

import Hide from "@a/images/biyan@2x.png"
import Show from "@a/images/zhengyan@2x.png"

import {ListContainer} from"./StyledResetPwd"

class Reset extends Component{

    state = {
        toggle:false
    }
    handleToggleClick = () => {
        return (e) => {
            this.setState({
                toggle : !this.state.toggle
            })
            // this.state.toggle = !this.state.toggle
            e.target.src = this.state.toggle? Show :Hide
        }
    }
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <>
                <Header></Header>
                <ListContainer>
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
                    <InputItem
                        {...getFieldProps('oldpwd')}
                        type="password"
                        placeholder="请输入旧密码（6-20位）"
                        extra={<img src={Hide} onClick={this.handleToggleClick()} alt=""/>}
                    ></InputItem>
                   <InputItem
                        {...getFieldProps('newpwd')}
                        type="password"
                        placeholder="请输入新密码（6-20位）"
                        extra={<img src={Hide} onClick={this.handleToggleClick()} alt=""/>}
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('confirmpwd')}
                        type="password"
                        placeholder="确认密码"
                        extra={<img src={Hide}  onClick={this.handleToggleClick()} alt=""/>}
                    ></InputItem>
                </List>
                <Button type="primary" >确认</Button>
                </ListContainer>
               
            </>
        )
    }
}

const ResetPwd = createForm()(Reset);
export default  ResetPwd