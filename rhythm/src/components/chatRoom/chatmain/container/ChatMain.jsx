import React,{Component} from 'react'
import Header from "@c/notice/Header"
import {withRouter} from "react-router-dom"
import ChatMainUI from "../ui/ChatMainUI"
import http from "@u/https"


@withRouter
class ChatMain extends Component{

    state = {
        msgList : []
    }

    handleGetMsgList(msgList){
        console.log(msgList)
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

export default  ChatMain