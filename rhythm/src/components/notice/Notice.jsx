import React,{Component} from 'react'

import {Container} from "./StyledNotice"
import Header from "./Header"
import TabBar from "./TabBar"


import {connect} from "react-redux"
import {actionCreator as ac} from "@h/"

@connect(
    state =>  ({
      list:state.MsgDetail.list
    }),
    dispatch => ({
        loadMsgData() {
          dispatch(ac.loadMsgDataAsync())
        }
      })
)
class Notice extends Component{
    render(){
        return (
            <Container>
                <Header></Header>
                <TabBar {...this.props}></TabBar>
            </Container>
        )
    }
    componentDidMount(){
        this.props.loadMsgData()
    }
}
export default Notice