import React,{Component} from 'react'

import {Container} from "./styledChat"
import Header from "../notice/Header"
import ChatWrap from "./ChatUser/ChatUser"
import http from '@u/https';


class ChatRoom extends Component{

  state = {
    nameList:[]
  }

    render() {
      return (
          <Container>
              <Header {...this.props}></Header>
              {
                this.state.nameList.map((value,index)=>{
                  return (
                    <ChatWrap key={value} name={value}></ChatWrap>
                  )
                })
              }
          </Container>
      );
    }

    async componentDidMount(){
      const nameList = await http.get("http://tn4aim.natappfree.cc/userChat/login")
      console.log(nameList)
      this.setState({
        nameList:nameList.name
      })
    }

    }
export default ChatRoom