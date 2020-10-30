import React,{Component} from 'react'

import { NavBar, Icon } from 'antd-mobile';

import {HeaderWrap} from "./StyledNotice"

import {withRouter} from "react-router-dom"

import { Toast, List } from 'antd-mobile';

@withRouter
class App extends Component{

     successToast =() => {
        Toast.success('修改成功 !!!', 1);
      }
      
    render(){
        return (
            <HeaderWrap {...this.props}>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.goBack()}
                rightContent={this.props.location.state.right ? <List onClick={this.successToast} color="#5cb85c">保存</List> : ""}
            >{this.props.children ? this.props.children : this.props.location.state.title}</NavBar>
            </HeaderWrap>
        )
    }
    componentDidMount() {
        setTimeout(() => {
          Toast.hide();
        }, 3);
      }
}
export default App