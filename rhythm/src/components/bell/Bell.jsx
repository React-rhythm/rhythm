import React,{Component} from 'react'

import {Badge} from "antd-mobile"

import {Container} from "./StyledBell"

import {connect} from "react-redux"

@connect(
    state => ({
        isShow:state.notice.isShow
    })
)
class Bell extends Component{
    render(){
        return (
            <Container>
                <Badge dot={this.props.isShow}>
                    <span className="iconfont icon-lingdang"  style={{ fontSize:'30px',width: '30px', height: '30px',color:"#fff", display: 'inline-block' }}/>
                </Badge>
            </Container>
        )
    }
}

export default Bell