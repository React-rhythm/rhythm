import React,{Component} from 'react'
import {Container} from "./StyledChatSearch"
import AvatarVisitor from "@a/images/avatar-visitor.png"
import { withRouter } from 'react-router-dom';

@withRouter
class ChatSearchUI extends Component {
    handleClickChat =  () => {
        this.props.history.push("/chatmain",{title:"jack"})
    }
    render(){
        return (
            <Container>
                <div className="searchContent">
                    <p className="title">联系人</p>
                    <ul>
                        <li onClick={this.handleClickChat}>
                            <div className="avatar">
                                <img src={AvatarVisitor} alt=""/>
                            </div>
                            <div className="chatMain">
                                <div className="content">
                                    <p className="username">哈哈哈哈</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="avatar">
                                <img src={AvatarVisitor} alt=""/>
                            </div>
                            <div className="chatMain">
                                <div className="content">
                                    <p className="username">哈哈哈哈</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        )
    }
}

export default ChatSearchUI