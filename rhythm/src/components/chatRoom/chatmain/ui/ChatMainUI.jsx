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
  const store= useStore().getState().notice

  const history = useHistory()
 
  const {title} = history.location.state

  const [state, setState] = useState({
    username: "",
    msg: "",
    messages: [],
    status: 1,
    toName:title
  });

  const loadMsgList = async() => {
    const msgList = await http.get(`http://10.9.27.166:8080/userChat/pull/${state.toName}`);
    console.log(msgList);
    props.onGetMsgList(msgList)
  }

  const send = async () => {
    const result = await http.post("http://10.9.27.166:8080/userChat/sendMsg", JSON.stringify(state));
    console.log(result);
    setState({
      msg: "",
    });
    // loadMsgList();
  };

  return (
    <Container>
      <div className="message--list">
        {//根据用户角色渲染
        //   <div className={`message-item ${ roles ? 'item-user' : 'item-visitor'}`}>
        //   <div className="message-item--avatar">
        //     <img src={`${ roles ? AvatarUser : AvatarVisitor}`} /> :
        //   </div>
        //   <div className="message-item--body">
        //     <div className="message-item--name">{username}</div>
        //     <div className="message-item--content">ffffff</div>
        //   </div>
        // </div>
        }
        <div className={`message-item  item-user`}>
          <div className="message-item--avatar">
            <img src={AvatarUser} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">{username}</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
        <div className={`message-item item-visitor`}>
          <div className="message-item--avatar">
            <img src={AvatarVisitor} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">{title}</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
        <div className={`message-item item-user`}>
          <div className="message-item--avatar">
            <img src={AvatarUser} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">{username}</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
        <div className={`message-item item-visitor`}>
          <div className="message-item--avatar">
            <img src={AvatarVisitor} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">{title}</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
      </div>
      <div className="input--box">
        <input
          type="text"
          value={state.msg}
          onChange={(ev) => setState({...state, msg: ev.target.value })}
        />
        <button className="btn--primary" onClick={send}>
          发送
        </button>
      </div>
    </Container>
  );
};

export default ChatMainUI;
