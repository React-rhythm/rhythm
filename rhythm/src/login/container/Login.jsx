import React, { Component } from 'react';
import {NavBar, Icon } from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import WillLogin from '../ui/LoginInput1'

// import {connect} from 'react-redux'


// import http from '@u/http';


// @connect()
class Login1 extends Component {
    
    state={
        role:'',
        num:1
    }
    
    roles=()=>{
        switch(this.props.location.state.roles){
            case 1: return {roles:'法官登录',num:1}
            case 0:return{roles:'当事人登录',num:2}  
            case -1:return{roles:'报社登录',num:3}
        }  
    }
    handleMessage=()=>{
        return async ()=>{
            // let result=http.post('http://49.235.115.228/userInfo/register',
            // {
            //     "idcard": "123456789",
            //     "password": "qwer",
            //     "phoneid": "18637566291",
            //     "photoaddress": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1783902704,643624260&fm=26&gp=0.jpg",
            //     "realname": "思琦",
            //     "replynewpassword": "qwer",
            //     "status": "0",
            //     "username": "siqi"
            // }) .then((res)=>{
            //     console.log('结果',res);
            // }).catch(() => {
            //     console.log('失败')
            // })
            // console.log(result);
    
            this.props.history.push('/MessageLogin') 
        }
    }
    handleRegister1=()=>{
        return()=>{
            this.props.history.push('/register'+this.props.location.state.roles)
        }
    }
    componentDidMount(){
        let r=this.roles()
        this.setState({
            role:r.roles,
            num:r.num
        })
    }
    render() {
        return (
            <div style={{
                height:'100%',
                background:"#fff"
            }}>
             <NavBar
                    style={{
                        height:'.44rem',
                        color:'#333333',
                        fontWeight: 'bold',
                        fontSize:'0.17rem',   
                        fontFamily:'PingFang',
                       
                    }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {this.props.history.goBack()}}
                   
                >{this.state.role}</NavBar>
                <LoginIcon></LoginIcon>
                <WillLogin onMessage={this.handleMessage} onRegister1={this.handleRegister1} ></WillLogin>
                
            </div>
        );
    }
}

export default Login1;