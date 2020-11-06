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
        flag:0
    }
    roles=()=>{
        switch(this.props.location.state.roles){
            case 1: return'法官注册'
            case 0:return'当事人注册'
            case -1:return'报社注册'
        }  
    }

    handleCode=()=>{
        let phoneid=document.getElementById('phoneid').value
       
        let uuid=http.get('http://123.57.109.224:8081/userInfo/register/phone/'+phoneid)
    }
    handlePhoneId=(e)=>{
        http.get('http://123.57.109.224:8081/userInfo/register/findPhone')
        .then(res=>{
            if(res.flag===1){
                this.setState({
                    flag:1
                })
            }
        })       
    }
    handleUserName=()=>{
        http.get('http://123.57.109.224:8081/userInfo/register/findPhone')
        .then(res=>{
            if(res.flag===1){
                this.setState({
                    flag:1
                })
            }
        })       
    }

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