import React, { Component } from 'react';
import {NavBar, Icon } from 'antd-mobile';
import Content2 from '../ui/Content2'
import {withRouter} from 'react-router-dom'

@withRouter
class Register2 extends Component {
    state={
        role:'', 
        status:this.props.location.state.roles,
    }
    roles=()=>{
        switch(this.props.location.state.roles){
            case 1: return'法官注册'
            case 0:return'当事人注册'
            case -1:return'报社注册'
        }  
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
                 <Content2 ></Content2>
            </>
        );
    }
}

export default Register2;