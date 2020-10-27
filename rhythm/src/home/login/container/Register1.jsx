import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Content1 from '../ui/Content1'
import { withRouter } from 'react-router-dom'
// import Content from '../container/Login1'

@withRouter
class Register1 extends Component {

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
                <Content1></Content1>
            </>
        );
    }
}

export default Register1;