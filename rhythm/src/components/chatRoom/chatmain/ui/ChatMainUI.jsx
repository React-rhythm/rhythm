import React, { useState } from "react";
import { Container } from "./StyledChatMainUI";
import { useStore,useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
import http from "@u/https";
import AvatarUser from "@a/images/avatar-user.png"
import AvatarVisitor from "@a/images/avatar-visitor.png"


import {actionCreator as ac} from "@h/"


const ChatMainUI = (props) => {
  
  const store = useStore().getState()
  const opp = store.getusername
  
  const dispatch = useDispatch()

  const selfName = store.notice.selfName;
  
  const history = useHistory()
 
  const {title} = history.location.state
  


  let selfList = props[selfName] 
 
  let oppsiteList = props[title]

  
  const [state, setState] = useState({
    msg: "",
    messages: "",
    status: 1,
    toName:title
  });

  
  const loadMsgList = async() => {
    const msgList = await http.get(`http://localhost:8080/userChat/pull/${title}`);
   
    props.onGetMsgList(msgList)
    dispatch(ac.saveOppsiteMsgList(msgList))
  }

  const send = async () => {
    const result = await http.post("http://localhost:8080/userChat/sendMsg", JSON.stringify({...state,toName:title}));
   
    setState({
      msg: "",
    });
    loadMsgList();
  };
  
  return (
    <Container>
       <div className="message--list">
      { opp.isOnline === "1" ? 
        selfList && oppsiteList && selfList.map((value,index) => {
          return (
           <div key={index}>
                  <div key={selfList && selfList[index]}>
                        <div className={`message-item item-user}`}>
                      <div className="message-item--avatar">
                        <img src={AvatarUser} /> 
                      </div>
                      <div className="message-item--body">
                        <div className="message-item--name">{selfName}</div>
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
                  <div className="message-item--name">{selfName}</div>
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
