import React,{Component} from 'react'

import {Container} from "./styledChat"
import Header from "../notice/Header"
import ChatWrap from "./ChatUser/ChatUser"


class ChatRoom extends Component{

      render() {
        return (
            <Container>
                <Header {...this.props}></Header>
                <ChatWrap></ChatWrap>
                <ChatWrap></ChatWrap>
            </Container>
        );
      }
    }
export default ChatRoom