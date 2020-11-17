import React,{Component} from 'react'
import Header from "@c/notice/Header"
import {withRouter} from "react-router-dom"
import ChatMainUI from "../ui/ChatMainUI"
import http from "@u/https"
import { NavBar, Icon } from 'antd-mobile';


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

    // async handleQuitChatRoom (){
       
    //     //退出聊天，请求即可
    //     const res = await http.get("http://87fuyc.natappfree.cc/userChat/exit")
    //     console.log(res)
    //     localStorage.setItem("oppsiteStatus","0")
    //     this.props.history.goBack()
    // }
    render(){
        
        return (
            <>  
                {/* <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleQuitChatRoom.bind(this)}
                >聊天室</NavBar> */}

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