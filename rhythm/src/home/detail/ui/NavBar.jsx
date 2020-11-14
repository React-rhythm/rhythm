import React from 'react';
import {NavBar, Icon } from 'antd-mobile'
const navBar=()=> {
        return (
                <NavBar
                    style={{
                        height:'.44rem',
                        color:'#333333',
                        fontWeight: 'bold',
                        fontSize:'0.17rem',   
                        fontFamily:'PingFang',
                        
                    }}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')} 
                >公告详情</NavBar> 
        );
    
}

export default navBar;