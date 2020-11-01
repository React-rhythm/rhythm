import React,{Component} from 'react'

import {Badge} from "antd-mobile"

import {Container} from "./StyledBell"


class Bell extends Component{
    render(){
        return (
            <Container>
                <Badge dot>
                    <span className="iconfont icon-lingdang"  style={{ fontSize:'30px',width: '30px', height: '30px',color:"#fff", display: 'inline-block' }}/>
                </Badge>
            </Container>
        )
    }
}

export default Bell