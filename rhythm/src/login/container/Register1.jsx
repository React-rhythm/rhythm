import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Content1 from '../ui/Content1'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import Content from '../container/Login1'

@withRouter
@connect(
    (state) => {
        return {
          judgeForm: {
            ...state.login.judgeForm,
            status:1
          }
          
        }
      }
)
class Register1 extends Component {
   
    handlegetCode=()=>{
        console.log('给我验证码');
    }
    handleUploading=()=>{
        console.log(this.props.judgeForm);
      
    }
    
    componentDidMount(){
       
    }
    render() {
        return (
            <>
                <NavBar
                    style={{
                        borderBottom: '1px solid #d8d8d8',
                        height: '.44rem',
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: '0.17rem',
                        fontFamily: 'PingFang',

                    }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.goBack()
                    }}

                >法官注册</NavBar>
                <Content1 onUploading={this.handleUploading}getCode={this.handlegetCode}></Content1>
            </>
        );
    }
}

export default Register1;