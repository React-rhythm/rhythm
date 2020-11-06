import React,{Component} from 'react'

import {Container} from "./styledChat"
import * as socket from './api'
import Header from "../notice/Header"
import AvatarUser from "@a/images/avatar-user.png"
import AvatarVisitor from "@a/images/avatar-visitor.png"

class ChatRoom extends Component{

    constructor(props){
        super(props);
        this.type = {
            'USER': 0,
            'VISITOR': 1,
            'INFO': 2
          }
    }
    state = {
        logined: false,
        username: '',
        message: '',
        messages: [],
        total: 0,
    }

    join = (e) => {
        const username = this.state.username
        if (username) {
          socket.login(username)
          this.setState({
              logined: true
          })
          socket.onMessage((data) => {
              this.log({
                  ...data,
                  type: this.type['VISITOR']
              })
          })
          socket.onLogin((data) => {
              this.log({
                  content: `${data.username}加入`,
                  type: this.type['INFO']
              })
              this.setState({
                total: data.numUsers
              })
          })
          socket.onJoin(data => {
            this.setState({
                total: data.numUsers
            })
          })
          socket.onLeft((data) => {
              this.log({
                  content: `${data.username}离开`,
                  type: this.type['INFO']
              })
              this.setState({
                  total: data.numUsers
              })
          })
        }
      }
      send = () => {
        const {username,message} = this.state;
        if(message) {
          const data = {
            username,
            message,
            time: new Date().getTime()
          }
          socket.send(data)
          this.log({
            ...data,
            type: this.type['USER']
          })
          this.setState({
            message: ''
          })
        }
      }
    
      log = (data) => {
        const messages = this.state.messages
          messages.push(data)
          this.setState({
              messages
          })
          this.scrollToBottom()
      }
    
      scrollToBottom = () => {
        setTimeout(() => {
            this.$messageList.scrollTop = this.$messageList.scrollHeight;
        }, 250)
      }

      render() {
        const self = this
        return (
            <Container>
                <Header></Header>
                <div className="App">
                {
                    this.state.logined ?
                    <div className="chat--box">
                    {/* <p className="participants"> 共 {this.state.total} 位参与者</p> */}
                    <div className="message--list" ref={node => this.$messageList = node}>
                        {
                        this.state.messages.map((item,idx) => {
                            const type = item.type
                            const user = type === this.type['USER']
                            return(
                            type === self.type['INFO'] ?
                            <div key={idx} className="message-item--info">{item.content}</div>
                            :
                            <div key={idx} className={`message-item ${ user ? 'item-user' : 'item-visitor'}`}>
                                <div className="message-item--avatar">
                                {
                                    user ?
                                    <img src={AvatarUser}/> :
                                    <img src={AvatarVisitor}/>
                                }
                                </div>
                                <div className="message-item--body">
                                <div className="message-item--name">{item.username}</div>
                                <div className="message-item--content">{item.message}</div>
                                </div>
                            </div>             
                            ) 
                        })
                        }
                    </div>
                    <div className="input--box">
                        <input type="text" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })}/>
                        <button className="btn--primary" onClick={this.send}>发送</button>
                    </div>
                    </div>
                    :
                    <div className="login-box">
                    <header>请输入昵称</header>
                    <input type="text" className="login-input"
                    value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} />
                    <button className="btn--primary" onClick={this.join} >确定加入</button>
                    </div>
                }
                </div>
            </Container>
        );
      }
    }
export default ChatRoom