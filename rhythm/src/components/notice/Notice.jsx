import React,{Component} from 'react'

import {Container} from "./StyledNotice"
import Header from "./Header"
import TabBar from "./TabBar"

export default class Notice extends Component{
    render(){
        return (
            <Container>
                <Header></Header>
                <TabBar>22</TabBar>
            </Container>
        )
    }
}
