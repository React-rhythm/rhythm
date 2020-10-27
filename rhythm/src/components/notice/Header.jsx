import React,{Component} from 'react'

import { NavBar, Icon } from 'antd-mobile';

import {HeaderWrap} from "./StyledNotice"

import {withRouter} from "react-router-dom"
@withRouter
class App extends Component{
    render(){
        return (
            <HeaderWrap {...this.props}>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.goBack()}
                rightContent={this.props.location.state.right ? "保存" : ""}
            >{this.props.children ? this.props.children : this.props.location.state.title}</NavBar>
            </HeaderWrap>
        )
    }
}
export default App