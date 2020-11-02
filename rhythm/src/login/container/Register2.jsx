import React, { Component } from 'react';
import {NavBar, Icon } from 'antd-mobile';
import Content2 from '../ui/Content2'
import {withRouter} from 'react-router-dom'
// import Content from '../container/Login1'

@withRouter
class Register2 extends Component {
    state={
        idcard:'',
        password:'',
        phoneid:'',
        photoaddress:'',
        realname:'',
        repalybewpassword:'',
        status:'',
        username:'',
        uuid:'string'
    }
    handleGetCode=()=>{
        console.log(0);
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
                   
                >当事人注册</NavBar>
                 <Content2 onGetCode={this.handleGetCode}></Content2>
            </>
        );
    }
}

export default Register2;