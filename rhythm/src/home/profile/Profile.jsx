import React from 'react'
import { useHistory} from "react-router-dom";

import Banner from "@a/images/banner@2x.png"
import LoginDefault from "@a/images/touxiang4@2x.png"
import LawyerDefault from "@a/images/touxiang2@2x.png"

import {HeaderWrap} from "./StyledProfile"

import ProfileContent from "./ProfileContent"


const  MyProfile = (props) => {
   
    const role = props.location.state.roles
    
    const token = window.localStorage.getItem("token")

    const history = useHistory();
    
    const username = history.location.state.username
    
   
    const handleClick = () => {
        return () => {
            history.push("/login",{roles:role});
        }
    }
    return (
        <>
            <HeaderWrap>
                <img src={Banner} alt=""/>
                <div className="navtar">
                    <img className="icon" src={role === 1 ? LawyerDefault:LoginDefault} alt=""></img>
                    <p className="status" onClick={handleClick()}>{token ? username :" 登录/注册"}</p>
                </div>
            </HeaderWrap>
            <ProfileContent {...props}>

            </ProfileContent>
        </>
    )
}

export default MyProfile