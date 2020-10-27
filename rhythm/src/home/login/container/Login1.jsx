import React, { Component } from 'react';
import {NavBar, Icon } from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import WillLogin from '../ui/LoginInput1'


import http from '@u/http';



class Login1 extends Component {

    handleMessage=()=>{
        return async ()=>{
            let result=http.post('http://49.235.115.228/userInfo/register',{
                "idcard": "123456789",
                "password": "qwer",
                "phoneid": "18637566291",
                "photoaddress": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1783902704,643624260&fm=26&gp=0.jpg",
                "realname": "思琦",
                "replynewpassword": "qwer",
                "status": "0",
                "username": "siqi"
            }) .then((res)=>{
                console.log('结果',res);
            }).catch(() => {
                console.log('失败')
            })
            console.log(result);
            
            this.props.history.push('/home/MessageLogin')
        }
    }
    handleRegister1=()=>{
        return()=>{
            this.props.history.push('/home/register1')
        }
    }
    render() {
        return (
            <div style={{
                height:'100%',
                background:'#f5f5f5'
            }}>
             <NavBar
                    style={{
                        
                        height:'.44rem',
                        color:'#333333',
                        fontWeight: 'bold',
                        fontSize:'0.17rem',   
                        fontFamily:'PingFang',
                        background:"#f5f5f5"
                        
                    }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {}}
                   
                >法官登录</NavBar>
                <LoginIcon></LoginIcon>
                <WillLogin onMessage={this.handleMessage} onRegister1={this.handleRegister1}></WillLogin>
                
            </div>
        );
    }
}

export default Login1;