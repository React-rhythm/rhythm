import React,{Component} from 'react'

import {Badge} from "antd-mobile"

import {Container} from "./StyledBell"

import {connect} from "react-redux"

import {withRouter} from "react-router-dom"
import {actionCreator as ac} from "@h/"

import http from "@u/https"

@connect(
    state => ({
        isShow:state.notice.isShow,
        toName:state.MsgDetail.toName,
        username:state.getusername.username,
        name:state.getusername.name,
    }),
    dispatch => ({
        loadMsgData(oppsiteMsgList) {
          dispatch(ac.saveOppsiteMsgList(oppsiteMsgList))
        }
      })
)
@withRouter
class Bell extends Component{
    handleBellClick = async() =>{
        
        const toName = this.props.name
       
        this.props.history.push("/notice",{title:"报社"})

        const res =await http.get(`http://tn4aim.natappfree.cc/userChat/notice/${toName}`)
        
        this.props.loadMsgData(res[toName])
    }
    render(){
        
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