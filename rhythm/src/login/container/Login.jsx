import React, { Component } from 'react';
import { NavBar, Icon ,Modal} from 'antd-mobile';
import LoginIcon from '../ui/LoginIcon'
import WillLogin from '../ui/LoginInput1'
import http from '../../utils/http'

import {connect} from 'react-redux'
import {actionCreator as ac} from "@h/content"
import {actionCreator as acc} from "@c/chatRoom/chatmain"


const alert=Modal.alert

@connect(state=>({
    roles:state.notice.roles,
    username:state.getusername.username,
    selfName:state.notice.selfName
  }),dispatch=>({
    changeRole(roles){
      dispatch(ac.changeRoles(roles))
    },
    getUsername(username){
        dispatch(acc.getusername(username))
    },
    getSelfName(selfName){
        dispatch(ac.getSelfName(selfName))
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
        loginshow:'',
        codeshow:''

    }
     showAlert = () => {
        const alertInstance = alert('律动', '账号或者密码错误', [
          { text: '取消', onPress: () => console.log('取消'), style: 'default' },
          { text: '确认', onPress: () => console.log('确认') },
        ]);
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 500000);
      };
    
    roles = () => {
        switch (this.props.location.state.roles) {
            case 1: return { roles: '法官登录' }
            case 0: return { roles: '当事人登录' }
            case -1: return { roles: '报社登录' }
        }
    }
    handleMessage = () => {
        return  () => {
            this.props.history.push('/MessageLogin',{status:this.state.status})
        }
    }
    handleRegister1 = () => {
        return () => {
            this.props.history.push('/register', { roles: this.props.location.state.roles })
        }
    }
    handleForget = () => {
        return () => {
            this.props.history.push('/MessageLogin',{status:this.state.status})
        }
    }
    handleLogin = () => {
        return () => {

            let userLogin = {
                username: this.state.username,
                password: this.state.password,
                status: this.state.status
            }
          
             http.post('http://114.67.247.63:8010/userInfo/userLogin',JSON.stringify(userLogin))
            .then(res=>{
                let token=res.token
                let flag=res.flag
                localStorage.setItem('token',token)
                if(token){
                    this.props.changeRole(this.state.status)
                    this.props.getUsername(this.state.username)
                    this.props.getSelfName(this.state.username)
                }
                if(this.state.status===1&&flag===1){
                    this.props.history.push('/laywer',{roles: 1,username:this.state.username})
                }else if(this.state.status===0&&flag===1){
                    this.props.history.push('/litigant',{roles: 0,username:this.state.username})
                }else if(this.state.status===-1&&flag===1){
                    this.props.history.push('/home',{roles: -1,username:this.state.username})
                }else{
                    
                }
            }).catch(err =>{
                this.showAlert()
            })
        }

    }
    handleIdcard = (e) => {
        this.setState({
            username: e.target.value
        })
        let user=e.target.value
        if(user===""){
           this.setState({
            loginshow:'用户名不能为空'
           })
        }else if(user.length<4){
            this.setState({
                loginshow:'用户名不少于4位'
               })   
        }else{
            this.setState({
                loginshow:''
            })
        }

        
    }
    handlemima = (e) => {

        this.setState({
            mima: true,
            password: e.target.value
        })

        let password=e.target.value
        if(password===""){
           this.setState({
            codeshow:'密码不能为空'
           })
        }else if(password.length<8){
            this.setState({
                codeshow:"密码不不能少于8位数"
               })   
        }else{
            this.setState({
                codeshow:''
            })
        }

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
                <WillLogin state={this.state} onMessage={this.handleMessage} onRegister1={this.handleRegister1} onForget={this.handleForget} onLogin={this.handleLogin} onIdcard={this.handleIdcard} onMima={this.handlemima}></WillLogin>

            </div>
        );
    }
}

export default Login1;