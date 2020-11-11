import React, { useState } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { ContentWrap2 } from './StyledLogin'
import { useHistory } from 'react-router-dom'

import http from '../../utils/http'


const Content2 = (props) => {
    const { getFieldProps, getFieldError } = props.form;
    const [Password, setPassword] = useState('');
   
    const history = useHistory();


    
    const onSubmit = () => {
        history.push('/success', { roles: props.state.status })
        props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                let register = props.form.getFieldsValue()
                let userLogin = {
                    ...register,
                    status: "1",
                }
                const res = http.post('http://123.57.109.224:8081/userInfo/register', JSON.stringify(userLogin))
            } else {
                console.log('Validation failed');
            }
        });
    }

    const validateAddress = (rule, value, callback) => {
        if (value && value.length >= 2) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入图片地址'));
        } else {
            callback(new Error('地址有误'));
        }
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
    const validateName = (rule, value, callback) => {
        if (value && value.length >= 2) {

            callback();

        } else if (value.length === 0) {
            callback(new Error('请输入姓名'));
        } else {
            callback(new Error('姓名不合法'));
        }
    }
    const validateID = (rule, value, callback) => {
        if (value && value.length === 18) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入身份证号'));
        } else {
            callback(new Error('身份证号不合法'));
        }
    }
    const validatePhone = (rule, value, callback) => {
        console.log(props.state.flag);
        if (props.state.flag === 0) {
            callback(new Error('手机号存在'))
        } else if (/^1[34578]\d{9}$/.test(value)) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入手机号'));
        } else {
            callback(new Error('手机号不合法'));
        }
    }

    const validateuuid = (rule, value, callback) => {

        if (value && value.length === 4) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('验证码不能为空'));
        } else {
            callback(new Error('验证码不正确'));
        }
    }

    const validatePassword = (rule, value, callback) => {
        if (value && value.length >= 8) {
            setPassword(value)
            callback()
        } else if (value.length === 0) {
            callback(new Error('密码不能为空'));
        } else {
            callback(new Error('密码最少为8位'))
        }
    }
    const validateRePassword = (rule, value, callback) => {
        if (value && value === Password) {
            callback()
        } else if (value.length === 0) {
            callback(new Error('请再此输入密码'));
        } else {
            callback(new Error('两次密码不一致'))
        }
    }

    return (
        <>
            <ContentWrap2>
                <form className='count-setting'>

                    <List>
                        <InputItem
                            {...getFieldProps('photoaddress', {
                                rules: [
                                    { validator: validateAddress },
                                ],
                            })}
                            error={!!getFieldError('photoaddress')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('photoaddress'), 1);
                            }}
                            clear
                            type="text"
                            placeholder="请输入图片地址"
                            style={{
                                fontSize: "0.14rem"
                            }}

                        >
                        </InputItem>
                        <InputItem
                            {...getFieldProps('realname', {
                                rules: [
                                    { validator: validateName },
                                ],
                            })}
                            error={!!getFieldError('realname')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('realname'), 1);
                            }}
                            clear
                            type="text"
                            placeholder="请输入姓名"
                            onBlur={props.onRealName}
                            style={{
                                fontSize: "0.14rem"
                            }}
                        >

                        </InputItem>
                        <InputItem
                            {...getFieldProps('username', {
                                rules: [
                                    { validator: validateuserName },
                                ],
                            })}
                            error={!!getFieldError('username')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('username'), 1);
                            }}
                            clear
                            type="text"
                            placeholder="请输入用户名"
                            onBlur={props.onName}
                            style={{
                                fontSize: "0.14rem"
                            }}
                        >

                        </InputItem>

                        <InputItem
                            {...getFieldProps('idcard', {
                                rules: [
                                    { validator: validateID },
                                ],
                            })}
                            error={!!getFieldError('idcard')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('idcard'), 1);
                            }}
                            clear
                            type="number"
                            placeholder="请输入身份证号码"
                            maxLength='18'
                            onBlur={props.onIdCard}
                            style={{
                                fontSize: "0.14rem"
                            }}
                        >

                        </InputItem>
                        <InputItem
                            {...getFieldProps('phoneid', {
                                rules: [
                                    { validator: validatePhone },
                                ],
                            })}
                            error={!!getFieldError('phoneid')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('phoneid'), 1);
                            }}
                            clear
                            type="number"
                            placeholder="手机号"
                            id="phoneid"
                            onBlur={props.onPhoneId}
                            style={{
                                fontSize: "0.14rem"
                            }}
                        >

                        </InputItem>
                        <InputItem
                            {...getFieldProps('uuid', {
                                rules: [
                                    { validator: validateuuid },
                                ],
                            })}
                            error={!!getFieldError('uuid')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('uuid'), 1);
                            }}
                            clear
                            placeholder="请输入验证码"
                            style={{
                                fontSize: "0.14rem"
                            }}

                        >
                            {
                                    props.state.liked
                                    ?
                                    <span className='yanzhengma' onClick={props.onGetCode} >获取验证码</span>
                                    :
                                    <span style={{ fontSize: "0.14rem" }}>{props.state.seconds + ' s 后发送'}</span>
                            }
                            
                        </InputItem>
                        <InputItem
                            {...getFieldProps('password', {
                                rules: [
                                    { validator: validatePassword },
                                ],
                            })}
                            error={!!getFieldError('password')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('password'), 1);
                            }}
                            clear
                            type="password"
                            placeholder="请输入密码"
                            style={{
                                fontSize: "0.14rem"
                            }}
                        >

                        </InputItem>
                        <InputItem
                            {...getFieldProps('replynewpassword', {
                                rules: [
                                    { validator: validateRePassword },
                                ],
                            })}
                            error={!!getFieldError('replynewpassword')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('replynewpassword'), 1);
                            }}
                            clear
                            type="password"
                            placeholder="确认密码"
                            style={{
                                fontSize: "0.14rem"
                            }}
                        >

                        </InputItem>
                        <List.Item>
                            <Button type='primary' onClick={onSubmit}>注册</Button>
                        </List.Item>
                    </List>
                </form>
            </ContentWrap2>

        </>
    )
}

export default createForm()(Content2);