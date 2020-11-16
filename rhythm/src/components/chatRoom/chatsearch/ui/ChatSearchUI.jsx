import React,{Component} from 'react'
import {Container} from "./StyledChatSearch"
import AvatarVisitor from "@a/images/avatar-visitor.png"
import { withRouter } from 'react-router-dom';

@withRouter
class ChatSearchUI extends Component {
    
    handleClickChat =  () => {
        this.props.history.push("/chatmain",{title:this.props.toName,oppsiteStatus:this.props.oppsiteStatus})
    }
    
    render(){
        return (
            <Container>
                {
                    this.props.toName && 
                    <div className="searchContent">
                    <p className="title">联系人</p>
                    <ul>
                        <li onClick={this.handleClickChat}>
                            <div className="avatar">
                                <img src={AvatarVisitor} alt=""/>
                            </div>
                            <div className="chatMain">
                                <div className="content">
                                <p className="username">{this.props.toName}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                }
                
            </Container>
        )
    }
}

export default ChatSearchUI