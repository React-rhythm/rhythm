import React, { useState } from "react";
import { Container } from "./StyledChatMainUI";
import { useStore } from "react-redux";
import {useHistory} from "react-router-dom"
import http from "@u/https";
import AvatarUser from "@a/images/avatar-user.png"
import AvatarVisitor from "@a/images/avatar-visitor.png"


const ChatMainUI = (props) => {
  
  const {username} = useStore().getState().getusername;
  //还要获取当前用户的roles
  // const {roles}= useStore().getState().notice
  // console.log(roles)

  const history = useHistory()
 
  const {title} = history.location.state
  const {oppsiteStatus} =  history.location.state
  

  let selfList = props[username] 
  let oppsiteList = props[title]

  const [state, setState] = useState({
    username: "",
    msg: "",
    messages: "",
    status: 1,
    toName:title
  });

  const loadMsgList = async() => {
    const msgList = await http.get(`http://10.9.27.166:8080/userChat/pull/${title}`);
    console.log(msgList);
    props.onGetMsgList(msgList)
  }

  const send = async () => {
    const result = await http.post("http://10.9.27.166:8080/userChat/sendMsg", JSON.stringify({...state,toName:title}));
    console.log(result);
    setState({
      msg: "",
    });
    loadMsgList();
  };

  //如果对方不在线，只要渲染自己发的消息 将消息存储在铃铛  显示红点
  
  return (
    <Container>
       <div className="message--list">
      { oppsiteStatus === 1 ? 
        selfList && oppsiteList && selfList.map((value,index) => {
          return (
           <div key={index}>
                  <div key={selfList && selfList[index]}>
                        <div className={`message-item item-user}`}>
                      <div className="message-item--avatar">
                        <img src={AvatarUser} /> 
                      </div>
                      <div className="message-item--body">
                        <div className="message-item--name">{username}</div>
                        <div className="message-item--content">{selfList && selfList[index]}</div>
                      </div>
                    </div>
                  </div>
                  <div key={oppsiteList && oppsiteList[index]}>
                       <div className={`message-item item-visitor`}>
                          <div className="message-item--avatar">
                          { oppsiteList[index] ? <img src={AvatarVisitor} /> :"" }
                          </div>
                          <div className="message-item--body">
                            <div className="message-item--name">{oppsiteList[index] ? title : ""}</div>
                            <div className="message-item--content">{oppsiteList && oppsiteList[index]}</div>
                          </div>
                        </div>
                  </div>
                </div>
           
            
          )
        })
        :
        selfList && selfList.map((value,index) => {
          return (
            <div key={selfList && selfList[index]}>
                  <div className={`message-item item-user}`}>
                <div className="message-item--avatar">
                  <img src={AvatarUser} /> 
                </div>
                <div className="message-item--body">
                  <div className="message-item--name">{username}</div>
                  <div className="message-item--content">{selfList && selfList[index]}</div>
                </div>
              </div>
            </div>
          )
        })
      }
       </div>
      <div className="input--box">
        <input
          type="text"
          value={state.msg}
          onChange={(ev) => setState({...state, msg: ev.target.value,messages:ev.target.value})}
        />
        <button className="btn--primary" onClick={send}>
          发送
        </button>
      </div>
    </Container>
  );
};

export default ChatMainUI;
