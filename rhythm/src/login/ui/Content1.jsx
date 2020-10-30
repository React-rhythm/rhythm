import React, { useCallback, useEffect } from 'react';
import {List} from 'antd-mobile';
import {ContentWrap} from './StyledLogin'
import WillRegister from '../../components/register/WillRegister/WillRegister'
import border from '../../assets/styled/border'
import useChangeJudgeForm from './useChangeJugdeForm'
const ContentWrapb=border(ContentWrap)
const Content1 =(props)=>{
   const {handleNameChange}=useChangeJudgeForm()
   const changName = useCallback((e)=>{
       handleNameChange(e.target.value)
   })

//    useEffect(()=>{
//        console.log(name);
//    })
    return(
        <>
        <ContentWrapb width="0 0 0 0">
                <List><input type="text" placeholder="请输入姓名"  onBlur={changName}/></List>
                <List><input type="text" placeholder="请输入用户名" onBlur={props.onblur2} /></List>
                <List><input type="text" placeholder="所在法院"/></List>
                <List><input type="text" placeholder="手机号"/></List>
                <List><input type="text" placeholder="请输入验证码"/><span>发送验证码</span></List>
                <List><input type="text" placeholder="请输入密码"/></List>
                <List><input type="text" placeholder="确认密码"/></List>
        </ContentWrapb>
        <WillRegister></WillRegister>
        </>
    )
}

export default Content1;