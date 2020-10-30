import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Content1 from '../ui/Content1'
import { withRouter } from 'react-router-dom'
// import Content from '../container/Login1'

@withRouter
class Register1 extends Component {
    state={
        name:'',
        mima:'',
    }
    componentDidMount(){
        console.log(this.state.name);
    }
    handleblur=(e)=>{
        this.setState({
            name:e.target.value,
        },()=>{
            console.log(this.state.name);  
        })
    this.handleblur2=(e)=>{
        this.setState({
            mima:e.target.value
        },()=>{     
            console.log(this.state.mima);
        })
    }
        
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
                <Content1 {...this.props} onblur={this.handleblur} onblur2={this.handleblur2}></Content1>
            </>
        );
    }
}

export default Register1;