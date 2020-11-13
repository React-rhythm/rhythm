import React,{Component} from 'react'
import { SearchBar} from 'antd-mobile';
import { withRouter} from "react-router-dom"
import ChatSearchUI from "../ui/ChatSearchUI"
import http from "@u/https"

@withRouter
class ChatSearch extends Component{
    state = {
        value: '',
        searchList:[]
      };
      componentDidMount() {
        this.autoFocusInst.focus();
      }
      onChange= (value) => {
        this.setState({ value });
        setTimeout(async ()=>{
            const searchResult =await  http.post("",JSON.stringify())
            this.setState({
                searchList:searchResult
            })
        },1000)
        
      };
      HandleClearClick = () => {
          this.props.history.goBack()
      }

    render(){
        return (
            <>
                <SearchBar placeholder="搜索" ref={ref => this.autoFocusInst = ref} 
                    onChange={this.onChange}
                    value={this.state.value}
                    onClear={this.HandleClearClick}
                />
                <ChatSearchUI {...this.state.searchList}></ChatSearchUI>
            </>
        )
    }
}

export default ChatSearch