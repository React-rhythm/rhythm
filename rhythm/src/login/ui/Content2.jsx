import React, { useEffect, useContext, useState } from 'react';
import { Icon, List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import {ContentWrap2} from './StyledLogin'
import WillRegister from '../../components/register/WillRegister/WillRegister'
const Content2 =(props)=>{
    const { getFieldProps, getFieldError } = props.form;
    const [Password, setPassword] = useState('');

    const onSubmit = () => {
        props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(props.form.getFieldsValue());
            } else {
                console.log('Validation failed');
            }
        });
    }
    const validateuserName = (rule, value, callback) => {
        if (value && value.length >= 2) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入用户名'));
        } else {
            callback(new Error('用户名最少2位'));
        }
    }
    const validateName= (rule, value, callback) => {
        if (value && value.length >=2) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入姓名'));
        } else {
            callback(new Error('姓名不合法'));
        }
    }
    const validateID= (rule, value, callback) => {
        if (value && value.length === 18) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入身份证号'));
        } else {
            callback(new Error('身份证号不合法'));
        }
    }
    const validatePhone = (rule, value, callback) => {
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (reg.test(value)) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入邮箱'));
        } else {
            callback(new Error('邮箱不合法'));
        }
    }
    const validateCode= (rule, value, callback) => {
        if (value && value.length === 6) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('验证码不能为空'));
        } else {
            callback(new Error('验证码不正确'));
        }
    }

    // const validatePassword=(rule,value,callback)=>{
    //     if(value&& value.length>=8){
    //         setPassword(value)
    //         callback()
    //     }else if(value.length===0){
    //         callback(new Error('密码不能为空'));
    //     } else {
    //         callback(new Error('密码最少为8位'))
    //     }
    // }
    // const validateRePassword=(rule,value,callback)=>{
    //     if(value&& value.length===8){
    //         callback()
    //     }else if(value.length===0){
    //         callback(new Error('密码不能为空'));e
    //     } else {
    //         callback(new Error('密码最少为8位'))
    //     }
    // }
    return(
        <>
        {/* <ContentWrap2> */}
        <form className='count-setting'>
            <List>
            <InputItem
                    {...getFieldProps('name', {
                        rules: [
                            { validator: validateName },
                        ],
                    })}
                    error={!!getFieldError('name')}
                    onErrorClick={() => {
                        Toast.info(getFieldError('name'), 1);
                    }}
                    clear
                    type="text"
                    placeholder="请输入姓名"
                >
                   
                </InputItem>
                <InputItem
                    {...getFieldProps('userName', {
                        rules: [
                            { validator: validateuserName },
                        ],
                    })}
                    error={!!getFieldError('userName')}
                    onErrorClick={() => {
                        Toast.info(getFieldError('userName'), 1);
                    }}
                    clear
                    type="text"
                    placeholder="请输入用户名"
                >
                   
                </InputItem>
             
                <InputItem
                    {...getFieldProps('ID', {
                        rules: [
                            { validator: validateID},
                        ],
                    })}
                    error={!!getFieldError('ID')}
                    onErrorClick={() => {
                        Toast.info(getFieldError('ID'), 1);
                    }}
                    clear
                    type="number"
                    placeholder="请输入身份证号码"
                    maxLength='18'
                >
                    
                </InputItem>
                <InputItem
                    {...getFieldProps('Phone', {
                        rules: [
                            { validator: validatePhone },
                        ],
                    })}
                    error={!!getFieldError('Phone')}
                    onErrorClick={() => {
                        Toast.info(getFieldError('Phone'), 1);
                    }}
                    clear
                    placeholder="手机号"
                >
                   
                </InputItem>
                <InputItem
                    {...getFieldProps('Code', {
                        rules: [
                            { validator: validateCode },
                        ],
                    })}
                    error={!!getFieldError('Code')}
                    onErrorClick={() => {
                        Toast.info(getFieldError('Code'), 1);
                    }}
                    clear
                    placeholder="请输入验证码"
                >
                   
                </InputItem>
                <List.Item>
                    <Button type='primary' onClick={onSubmit}>确认</Button>
                </List.Item>
            </List>
        </form>
                {/* <List><input type="text" placeholder="请输入姓名"/></List>
                <List><input type="text" placeholder="请输入用户名"/></List>
                <List><input type="text" placeholder="请输入身份证号码"/></List>
                <List><input type="text" placeholder="手机号"/></List>
                <List><input type="text" placeholder="请输入验证码"/><span>发送验证码</span></List>
                <List><input type="text" placeholder="请输入密码"/></List>
                <List><input type="text" placeholder="确认密码"/></List> */}
        {/* </ContentWrap2> */}
        {/* <WillRegister></WillRegister> */}
        </>
    )
}

export default createForm()(Content2);