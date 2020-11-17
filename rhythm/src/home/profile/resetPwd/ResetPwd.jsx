import React,{Component} from 'react'
import { List, InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import Header from "@c/notice/Header.jsx"

import Hide from "@a/images/biyan@2x.png"
import Show from "@a/images/zhengyan@2x.png"

import {ListContainer} from"./StyledResetPwd"

import http from "@u/http"

class Reset extends Component{

    state = {
        toggle:false,
        phoneid:"",
        uuid:"",
        password:"",
        newpassword:"",
        replynewpassword:""
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
    handlePutCodeClick = async() => {
        const phoneid = this.state.phoneid
        const findPhoneRes = await http.get(`http://localhost:8080/userInfo/register/resetPwd/${phoneid}`)
        console.log(findPhoneRes)
    }
    handlePutPassword = () => {
        return (e) => {
            this.setState({
                password:e
            })
        }
    }
    handlePutNewPassword = () => {
        return (e) => {
            
            this.setState({
                newpassword:e
            })
        }
    }
    handlePutReplyNewPassword = () => {
        
        return  (e) => {
           
            this.setState({
                replynewpassword:e
            })
            // if(e !== this.state.newpassword){
            //     alert("两次密码输入不一致")
            // }
        }
    }
    handleResetPwd = async() => {
        const  {phoneid,uuid,password,replynewpassword} = this.state
        const token =window.localStorage.getItem("token")
        const obj = {phoneid,uuid,password,replynewpassword,token}
        console.log(obj)
        const result = await http.post('http://localhost:8080/userInfo/pwdReset',JSON.stringify(obj))
        console.log(result)
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
                        type="text"
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
                        extra={<div onClick={this.handlePutCodeClick}>获取验证码</div>}
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('oldpwd')}
                        type="password"
                        placeholder="请输入旧密码（6-20位）"
                        value={this.state.password}
                        onChange={this.handlePutPassword()}
                        extra={<img src={Hide} onClick={this.handleToggleClick()} alt=""/>}
                    ></InputItem>
                   <InputItem
                        {...getFieldProps('newpwd')}
                        type="password"
                        placeholder="请输入新密码（6-20位）"
                        value={this.state.newpassword}
                        onChange={this.handlePutNewPassword()}
                        extra={<img src={Hide} onClick={this.handleToggleClick()} alt=""/>}
                    ></InputItem>
                    <InputItem
                        {...getFieldProps('confirmpwd')}
                        type="password"
                        placeholder="确认密码"
                        value={this.state.replynewpassword}
                        onChange={this.handlePutReplyNewPassword()}
                        extra={<img src={Hide}  onClick={this.handleToggleClick()} alt=""/>}
                    ></InputItem>
                </List>
                <Button type="primary" onClick={this.handleResetPwd}>确认</Button>
                </ListContainer>
               
            </>
        )
    }
}

const ResetPwd = createForm()(Reset);
export default  ResetPwd