import React,{Component} from 'react'
import { SearchBar} from 'antd-mobile';
import { withRouter} from "react-router-dom"
import ChatSearchUI from "../ui/ChatSearchUI"
import http from "@u/https"

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
            const searchResult =await http.get(`http://10.9.27.166:8080/userChat/search/${e}`)
            console.log(searchResult)
            this.setState({
                toName:e,
                oppsiteStatus:"",
                searchList:searchResult
            })
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