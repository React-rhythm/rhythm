import React,{Component} from 'react'

import Banner from "@a/images/banner@2x.png"
import LoginDefault from "@a/images/touxiang4@2x.png"

import {HeaderWrap} from "./StyledProfile"

import ProfileContent from "./ProfileContent"

class MyProfile extends Component{
    render(){
        return (
            <>
                <HeaderWrap>
                    <img src={Banner} alt=""/>
                    <div className="navtar">
                        <img className="icon" src={LoginDefault} alt=""></img>
                        <p className="status">登录/注册</p>
                    </div>
                </HeaderWrap>
                <ProfileContent>

                </ProfileContent>
            </>
        )
    }
}

export default MyProfile