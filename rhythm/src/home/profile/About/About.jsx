import React,{Component} from 'react'
import Header from "@c/notice/Header.jsx"

import Remind from "@a/images/liucheng图层1@2x.png"
import {Container} from "./StyledAbout"


class About extends Component{
    render(){
        return (
            <Container>
                <Header></Header>
                <div className="imgWrap">
                    <img src={Remind} alt=""/>
                </div>
            </Container>
        )
    }
}

export default About