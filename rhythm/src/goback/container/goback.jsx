import React, { Component } from 'react';
import Success from "../ui/success"
import { NavBar, Icon } from 'antd-mobile';
import RegisterIcon from '../ui/registerImg'
class goback extends Component {
    render() {
        return (
            <>
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
                ></NavBar>
             <RegisterIcon></RegisterIcon>,
            <Success {...this.props}></Success>
            </>
           
        );
    }
}

export default goback;