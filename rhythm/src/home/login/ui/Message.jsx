import React from 'react';
import {NavBar, Icon } from 'antd-mobile';
// import { withRouter } from 'react-router-dom'


function Message(props) {
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
                        props.history.goBack()
                    }}

                >短信登录</NavBar>
        </>
    );
}

export default Message;