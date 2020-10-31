import React from 'react'
import { useHistory} from "react-router-dom";

import Banner from "@a/images/banner@2x.png"
import LoginDefault from "@a/images/touxiang4@2x.png"

import {HeaderWrap} from "./StyledProfile"

import ProfileContent from "./ProfileContent"


const  MyProfile = (props) => {
    // console.log(props)

    const history = useHistory();
   
    const handleClick = () => {
        return () => {
            history.push("/login1");
        }
    }
    return (
        <>
            <HeaderWrap>
                <img src={Banner} alt=""/>
                <div className="navtar">
                    <img className="icon" src={LoginDefault} alt=""></img>
                    <p className="status" onClick={handleClick()}>登录/注册</p>
                </div>
            </HeaderWrap>
            <ProfileContent>

            </ProfileContent>
        </>
    )
}

export default MyProfile