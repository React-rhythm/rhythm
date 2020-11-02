import React, { Component } from 'react';
import {NavBar, Icon } from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import WillLogin from '../ui/LoginInput1'
// import {connect} from 'react-redux'
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
        
            this.props.history.push('/MessageLogin') 
        }
    }
    handleRegister1=()=>{
        return()=>{
            this.props.history.push('/register'+this.props.location.state.roles,{status:this.props.location.state.roles})
        }
    }
    handleForget=()=>{
        return()=>{
            this.props.history.push('/MessageLogin')
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
                <WillLogin onMessage={this.handleMessage} onRegister1={this.handleRegister1} onForget={this.handleForget}></WillLogin>
                
            </div>
        );
    }
}

export default Login1;