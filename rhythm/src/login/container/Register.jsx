import React, { Component } from 'react';
import {NavBar, Icon } from 'antd-mobile';
import Content2 from '../ui/Content2'
import {withRouter} from 'react-router-dom'
import http from '../../utils/http'
@withRouter
class Register2 extends Component {
    state={
        role:'', 
        status:this.props.location.state.roles,
        phoneid:'',
        uuid:'',
        flag:"",
        btnText:'获取验证码',
        seconds: 60, //称数初始化
        liked: true //获取验证码文案
    }
    roles=()=>{
        switch(this.props.location.state.roles){
            case 1: return'法官注册'
            case 0:return'当事人注册'
            case -1:return'报社注册'
        }  
    }
   
   //获取验证码
    handleCode=()=>{
        let siv = setInterval(() => {
            this.setState({
              liked:false,
              seconds:this.state.seconds - 1,  
            },() => {
              if(this.state.seconds == 0){
                clearInterval(siv);
                this.setState({
                  liked:true,
                  secounds:60
                })
              }
            });  
          },1000);  
        let phoneid=document.getElementById('phoneid').value
       
        let uuid=http.get(' http://123.57.109.224:8081/userInfo/register/phone/'+phoneid)
    }

    //手机号是否已注册
   handlePhoneId=(e)=>{
       http.get('http://123.57.109.224:8081/userInfo/register/phone/'+e)
        .then(res=>{
            if(res.flag===0){
                alert('手机号已被注册')
            } 
        })    
        
    }

    //用户名是否存在
    handleUserName=()=>{
        http.get('http://123.57.109.224:8081/userInfo/findPhone')
        .then(res=>{
            if(res.flag===0){
               
                this.setState({
                    flag:0
                })
            }
        })       
    }

    //身份证号是否存在
    handleIdCard=()=>{
        // http.get('http://123.57.109.224:8081/userInfo/register/findPhone')
        // .then(res=>{
        //     if(res.flag===1){
        //         this.setState({
        //             flag:1
        //         })
        //     }
        // })       
    }

    //真实姓名是否存在
    handleRealName=()=>{
        // http.get('http://123.57.109.224:8081/userInfo/register/findPhone')
        // .then(res=>{
        //     if(res.flag===1){
        //         this.setState({
        //             flag:1
        //         })
        //     }
        // })       
    }

    componentDidMount(){
        let r=this.roles()
        this.setState({
            role:r,
        })
    }
    render() {
        return (
            <>
                <NavBar
                    style={{
                        borderBottom:'1px solid #d8d8d8',
                        height:'.44rem',
                        color:'#333333',
                        fontWeight: 'bold',
                        fontSize:'0.17rem',   
                        fontFamily:'PingFang',
                        
                    }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{
                        this.props.history.goBack()
                    }}
                   
                >{this.state.role}</NavBar>
                 <Content2 
                 state={this.state}
                 onGetCode={this.handleCode} 
                 onPhoneId={this.handlePhoneId} 
                 onName={this.handleUserName} 
                 onIdCard={this.handleIdCard}
                 onRealName={this.handleRealName}
                 ></Content2>
            </>
        );
    }
}

export default Register2;