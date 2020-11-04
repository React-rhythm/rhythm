import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import WillLogin from '../ui/LoginInput1'
import http from '../../utils/http'

import {connect} from 'react-redux'
import {actionCreator as ac} from "@h/content"

@connect(state=>({
    roles:state.notice.roles
  }),dispatch=>({
    changeRole(roles){
      dispatch(ac.changeRoles(roles))
    }
  }))
class Login1 extends Component {
    state = {
        role: '',
        idcard: false,
        mima: false,
        username: "",
        phoneid: '',
        password: '',
        status: this.props.location.state.roles,
    }

    roles = () => {
        switch (this.props.location.state.roles) {
            case 1: return { roles: '法官登录' }
            case 0: return { roles: '当事人登录' }
            case -1: return { roles: '报社登录' }
        }
    }
    handleMessage = () => {
        return async () => {
            this.props.history.push('/MessageLogin')
        }
    }
    handleRegister1 = () => {
        return () => {
            this.props.history.push('/register', { status: this.props.location.state.roles })
        }
    }
    handleForget = () => {
        return () => {
            this.props.history.push('/MessageLogin')
        }
    }
    handleLogin = () => {
        return async() => {

            let userLogin = {
                username: this.state.username,
                password: this.state.password,
                status: this.state.status
            }
          
            await http.post('http://123.57.109.224:8081/userInfo/userLogin',JSON.stringify(userLogin))
            .then(res=>{
                console.log(res);
                let token=res.token
                localStorage.setItem('token',token)
                if(token){
                    this.props.changeRole(this.state.status)
                }
                if(this.state.status===1){
                    this.props.history.push('/laywer',{roles: 1,username:this.state.username})
                }else if(this.state.status===0){
                    this.props.history.push('/litigant',{roles: 0,username:this.state.username})
                }else{
                    this.props.history.push('/home',{roles: -1,username:this.state.username})
                }
            })
        }

    }
    handleIdcard = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handlemima = (e) => {

        this.setState({
            mima: true,
            password: e.target.value
        })
    }
    componentDidMount() {
        let r = this.roles()
        this.setState({
            role: r.roles,
        })

    }
    render() {
        return (
            <div style={{
                height: '100%',
                background: "#fff"
            }}>
                <NavBar
                    style={{
                        height: '.44rem',
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: '0.17rem',
                        fontFamily: 'PingFang',
                    }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { this.props.history.goBack() }}
                >{this.state.role}</NavBar>
                <LoginIcon></LoginIcon>
                <WillLogin onMessage={this.handleMessage} onRegister1={this.handleRegister1} onForget={this.handleForget} onLogin={this.handleLogin} onIdcard={this.handleIdcard} onMima={this.handlemima}></WillLogin>

            </div>
        );
    }
}

export default Login1;