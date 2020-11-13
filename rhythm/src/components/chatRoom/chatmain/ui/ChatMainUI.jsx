import React, { useState } from "react";
import { Container } from "./StyledChatMainUI";
import { useStore } from "react-redux";
import http from "@u/https";
import AvatarUser from "@a/images/avatar-user.png"
import AvatarVisitor from "@a/images/avatar-visitor.png"


const ChatMainUI = (props) => {
  const store = useStore().getState();
  console.log(store);

  const [state, setState] = useState({
    logined: false,
    username: "",
    message: "",
    messages: [],
    total: 0,
  });

  const send = async () => {
    setState({
      message: "",
    });
    const result = await http.post("", JSON.stringify());
    console.log(result);
  };

  return (
    <Container>
      <div className="message--list">
        <div className={`message-item item-user`}>
          <div className="message-item--avatar">
            <img src={AvatarUser} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">aaaa</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
        <div className={`message-item item-visitor`}>
          <div className="message-item--avatar">
            <img src={AvatarVisitor} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">jack</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
        <div className={`message-item item-user`}>
          <div className="message-item--avatar">
            <img src={AvatarUser} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">aaaa</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
        <div className={`message-item item-visitor`}>
          <div className="message-item--avatar">
            <img src={AvatarVisitor} /> :
          </div>
          <div className="message-item--body">
            <div className="message-item--name">jack</div>
            <div className="message-item--content">ffffff</div>
          </div>
        </div>
      </div>
      <div className="input--box">
        <input
          type="text"
          value={state.message}
          onChange={(ev) => setState({ message: ev.target.value })}
        />
        <button className="btn--primary" onClick={send}>
          发送
        </button>
      </div>
    </Container>
  );
};

export default ChatMainUI;
