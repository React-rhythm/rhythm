import React,{Component} from 'react'
import Header from "@c/notice/Header"
import ChatMainUI from "../ui/ChatMainUI"
import http from "@u/https"

export default class ChatMain extends Component{

    state = {
        msgList : []
    }
    render(){
        return (
            <>
                <Header></Header>
                <ChatMainUI {...this.state.msgList}></ChatMainUI>
            </>
        )
    }

    componentDidMount(){
        const msgList = http.get("")
        this.setState({
            msgList
        })
    }
}