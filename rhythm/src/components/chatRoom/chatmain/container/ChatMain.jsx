import React,{Component} from 'react'
import Header from "@c/notice/Header"
import ChatMainUI from "../ui/ChatMainUI"
import http from "@u/https"

export default class ChatMain extends Component{

    state = {
        msgList : []
    }
    handleGetMsgList(msgList){
        this.setState({
            msgList
        })
    }
    render(){
        return (
            <>
                <Header quitStatus={true}></Header>
                <ChatMainUI {...this.state.msgList} onGetMsgList={this.handleGetMsgList.bind(this)}></ChatMainUI>
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