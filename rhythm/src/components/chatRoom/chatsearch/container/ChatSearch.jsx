import React,{Component} from 'react'
import { SearchBar} from 'antd-mobile';
import { withRouter} from "react-router-dom"
import {connect} from "react-redux"
import ChatSearchUI from "../ui/ChatSearchUI"
import http from "@u/https"
import {actionCreator as ac} from "@h/content"
import {actionCreator as acc} from "@h/"
import {actionCreator as accc} from "@c/chatRoom/chatmain"


@connect(state=>({
  isShow:state.notice.isShow,
  oppsiteStatus:state.MsgDetail.oppsiteStatus,
  isOnline:state.getusername.isOnline
}),dispatch=>({
  changeNotice(isShow){
    dispatch(ac.changeNoticeStatus(isShow))
  },
  saveOppsiteStatus(oppsiteStatus){
    dispatch(acc.saveOppsiteStatus(oppsiteStatus))
  },
  saveToName(toName){
    dispatch(acc.saveToName(toName))
  },
  loadMsgtName(name){
    dispatch(accc.loadMsgtName(name))
  },
  getIsOnLine(isOnline){
    dispatch(accc.getIsOnLine(isOnline))
  }
}))
@withRouter
class ChatSearch extends Component{
    state = {
        value: '',
        toName:"",
        searchList:[],
        isOnline:""
      };
      componentDidMount() {
        this.autoFocusInst.focus();
      }
      onChange= (value) => {
        this.setState({ value });
      };
      HandleClearClick = () => {
          this.props.history.goBack()
      }

      //搜索聊天对象，判断是否在线
      handleSubmitClick = async(e) => {
            const searchResult =await http.get(`http://114.67.247.63:8010/userChat/search/${e}`)
            console.log(searchResult)
            this.setState({
                toName:e,
                searchList:searchResult,
                isOnline:searchResult.state
            })
           
            this.props.saveToName(e)
            this.props.loadMsgtName(e)
            this.props.getIsOnLine(searchResult.state)
          
      }

    render(){
        return (
            <>
                <SearchBar placeholder="搜索" ref={ref => this.autoFocusInst = ref} 
                    onChange={this.onChange}
                    value={this.state.value}
                    onClear={this.HandleClearClick}
                    onSubmit={this.handleSubmitClick}
                />
                <ChatSearchUI {...this.state} {...this.props}></ChatSearchUI>
            </>
        )
    }
}

export default ChatSearch