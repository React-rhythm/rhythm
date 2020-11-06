import React,{Component} from 'react'

import {Badge} from "antd-mobile"

import {Container} from "./StyledBell"

import {connect} from "react-redux"

import {withRouter} from "react-router-dom"
@connect(
    state => ({
        isShow:state.notice.isShow
    })
)
@withRouter
class Bell extends Component{
    handleBellClick = () =>{
        this.props.history.push("/notice",{title:"报社"})
    }
    render(){
        // console.log(this.props)
        return (
            <Container>
                <Badge dot={this.props.isShow}>
                    <span className="iconfont icon-lingdang" onClick={this.handleBellClick} style={{ fontSize:'30px',width: '30px', height: '30px',color:"#fff", display: 'inline-block' }}/>
                </Badge>
            </Container>
        )
    }
}

export default Bell