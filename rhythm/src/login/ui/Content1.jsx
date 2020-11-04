import React, { useCallback, useEffect } from 'react';
import {List} from 'antd-mobile';
import {ContentWrap} from './StyledLogin'
import WillRegister from '../../components/register/WillRegister/WillRegister'
import border from '../../assets/styled/border'
import useChangeJudgeForm from './useChangeJugdeForm'
// import http, { get } from '../../utils/http'

const ContentWrapb=border(ContentWrap)
const Content1 =(props)=>{
   const {handleNameChange}=useChangeJudgeForm()
   const {handleUserNameChange}=useChangeJudgeForm()
   const {handleCourtChange}=useChangeJudgeForm()
   const {handlephoneidChange}=useChangeJudgeForm()
   const {handleVerificationCodeChange}=useChangeJudgeForm()
   const {handlePasswordChange}=useChangeJudgeForm()
   const {handlereplaynewpasswordChange}=useChangeJudgeForm()


//    const {realname}=useChangeJudgeForm()
//    const {username}=useChangeJudgeForm()
//    const {court}=useChangeJudgeForm()
//    const {phoneid}=useChangeJudgeForm()
//    const {verificationCode}=useChangeJudgeForm()
//    const {password}=useChangeJudgeForm()
//    const {replaynewpassword}=useChangeJudgeForm()
   


   const changName = useCallback((e)=>{
       handleNameChange(e.target.value)
   })
   const changUserName = useCallback((e)=>{
    handleUserNameChange(e.target.value)
})
    const changePhoneId=useCallback((e)=>{
        handlephoneidChange(e.target.value)
    })
    const changeverificationCode=useCallback((e)=>{
        handleVerificationCodeChange(e.target.value)
    })
    const changeCourt=useCallback((e)=>{
        handleCourtChange(e.target.value)
    })
    const changePassword=useCallback((e)=>{
        handlePasswordChange(e.target.value)
    })
    const changeRepassword=useCallback((e)=>{
        handlereplaynewpasswordChange(e.target.value)
    })

   useEffect(()=>{
    
    
   })

    return(
        <>
        <ContentWrapb width="0 0 0 0">
                <List><input type="text" id='name' placeholder="请输入姓名"  onBlur={changName}/></List>
                <List><input type="text" id='userName' placeholder="请输入用户名" onBlur={changUserName} /></List>
                <List><input type="text" placeholder="所在法院" onBlur={changeCourt}/></List>
                <List><input type="text" placeholder="手机号" onBlur={changePhoneId}/></List>
                <List><input type="text" placeholder="请输入验证码" onBlur={changeverificationCode}/><span onClick={props.getCode}>发送验证码</span></List>
                <List><input type="text" placeholder="请输入密码" onBlur={changePassword}/></List>
                <List><input type="text" placeholder="确认密码" onBlur={changeRepassword}/></List>
        </ContentWrapb>
        <WillRegister onUploading1={props.onUploading}></WillRegister>
        </>
    )
}

export default Content1;