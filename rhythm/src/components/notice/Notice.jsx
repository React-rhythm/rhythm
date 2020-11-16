import React,{Component} from 'react'

import {Container} from "./StyledNotice"
import Header from "./Header"
import TabBar from "./TabBar"
import {connect} from "react-redux"
import http from "@u/https"


@connect(
    state =>  ({
      oppsiteMsgList:state.MsgDetail.oppsiteMsgList,
      username:state.getusername.username,
      toName:state.MsgDetail.toName,
      name:state.getusername.name,
    }),

)
class Notice extends Component{
    state = ({
        oppsiteMsgList:[]
    })
    render(){
        console.log(this.props)
        return (
            <Container>
                <Header></Header>
                <TabBar {...this.props.oppsiteMsgList}></TabBar>
            </Container>
        )
    }
    // async componentDidMount (){
    //     var toName = this.props.toName
    //     console.log(toName)
    //     const msgList = toName &&  await http.get(`http://10.9.63.252:8080/userChat/notice/${toName}`);
    //     this.setState({
    //         oppsiteMsgList:msgList[toName]
    //     })
    // }
}
export default Notice