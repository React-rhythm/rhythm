import React from 'react';
import {List} from 'antd-mobile';
import {ContentWrap2} from './StyledLogin'
import WillRegister from '../../../components/register/WillRegister/WillRegister'
const Content2 =()=>{
    return(
        <>
        <ContentWrap2>
                <List><input type="text" placeholder="请输入姓名"/></List>
                <List><input type="text" placeholder="请输入用户名"/></List>
                <List><input type="text" placeholder="请输入身份证号码"/></List>
                <List><input type="text" placeholder="手机号"/></List>
                <List><input type="text" placeholder="请输入验证码"/><span>发送验证码</span></List>
                <List><input type="text" placeholder="请输入密码"/></List>
                <List><input type="text" placeholder="确认密码"/></List>
        </ContentWrap2>
        <WillRegister></WillRegister>
        </>
    )
}

export default Content2;