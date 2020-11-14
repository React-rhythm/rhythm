import React,{Component} from 'react'
import {ChatWrap} from "./StyledChatUser"

import AvatarUser from "@a/images/avatar-user.png"
import AvatarVisitor from "@a/images/avatar-visitor.png"
import { withRouter } from 'react-router-dom'

@withRouter
 class ChatUser extends Component{

    handleClickChat =  () => {
        this.props.history.push("/chatmain",{title:"jack"})
    }

    render(){
        return (
            <ChatWrap onClick={this.handleClickChat}>
                <div className="avatar">
                    <img src={AvatarVisitor} alt=""/>
                </div>
                <div className="chatMain">
                    <div className="content">
                        <p className="username">哈哈哈哈哈</p>
                        <p className="chatContent">今天天气真好</p>
                    </div>
                    <div className="date">
                        <span>14:37</span>
                    </div>
                </div>
            </ChatWrap>
        )
    }
}

export default ChatUser