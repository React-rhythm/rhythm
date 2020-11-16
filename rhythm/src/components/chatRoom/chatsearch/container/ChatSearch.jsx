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
  isShow:state.notice.isShow
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
  }
}))
@withRouter
class ChatSearch extends Component{
    state = {
        value: '',
        toName:"",
        searchList:[],
        oppsiteStatus:''
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
            const searchResult =await http.get(`http://10.9.63.252:8080/userChat/search/${e}`)
            
            this.setState({
                toName:e,
                searchList:searchResult
            })
            this.props.saveOppsiteStatus(searchResult.state)
            this.props.saveToName(e)
            this.props.loadMsgtName(e)
            //判断是否在线，相应改变铃铛状态
            // this.props.changeNotice(oppsiteStatus)
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
                <ChatSearchUI {...this.state}></ChatSearchUI>
            </>
        )
    }
}

export default ChatSearch