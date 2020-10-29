import React,{Component} from 'react'

import { NavBar, Icon } from 'antd-mobile';

import {HeaderWrap} from "./StyledNotice"

export default class App extends Component{
    render(){
        return (
            <HeaderWrap>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
            >报社</NavBar>
            </HeaderWrap>
        )
    }
}