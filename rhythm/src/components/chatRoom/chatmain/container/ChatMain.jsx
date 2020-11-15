import React,{Component} from 'react'
import Header from "@c/notice/Header"
import ChatMainUI from "../ui/ChatMainUI"
import http from "@u/https"
import { NavBar, Icon } from 'antd-mobile';


export default class ChatMain extends Component{

    state = {
        msgList : []
    }
    handleGetMsgList(msgList){
        console.log(msgList)
        this.setState({
            msgList
        })
    }

    handleQuitChatRoom(){
        //退出聊天，请求即可
        const res = http.get("http://10.9.27.166:8080/userChat/exit")
    }
    render(){
        return (
            <>  
                {/* <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.handleQuitChatRoom}
                    ]}
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