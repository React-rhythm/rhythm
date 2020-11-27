import React, { useState,useCallback } from 'react';
import { List, InputItem, Button, Toast,ImagePicker, Flex } from 'antd-mobile';
import { createForm } from 'rc-form';
import { ContentWrap2 } from './StyledLogin'
import { useHistory, } from 'react-router-dom'
import modal from './modal'
import http from '../../utils/http'


const Content2 = (props) => {
    const { getFieldProps, getFieldError } = props.form;
    const [Password, setPassword] = useState('');
    const history = useHistory();
    const data=[]
    const [files,setFiles] = useState(data)
    const [url,setUrl] = useState('')

    //图片选择
    const onChange = useCallback((files) => {
        setFiles(files);
        console.log(files[0].file);
        let imgForm = new FormData()
        imgForm.append('imgFile',files[0].file)
        http.post('http://114.67.247.63:8010/uploadImgToOSS',imgForm)
        .then(res => {
            console.log(res);
            setUrl(res)
        })
    })

    const onSubmit = () => {
        
        props.form.validateFields({ force: true }, (error) => {
            
            if (!error) {
                let register = props.form.getFieldsValue()
                let userLogin = {
                    ...register,
                    status: props.state.status,
                    photoaddress:url
                }
                console.log(userLogin);
                const res = http.post('http://114.67.247.63:8010/userInfo/register', JSON.stringify(userLogin)).then(res=>{
                    history.push('/success', { roles: props.state.status })
                })
            } else {
                modal.showAlert()
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
    const validateName = (rule, value, callback) => {
        if (value && value.length >= 2&&/^[\u4e00-\u9fa5](\s*[\u4e00-\u9fa5])*$/.test(value)) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入姓名'));
        } else {
            callback(new Error('姓名不合法'));
        }
    }
    const validateID = (rule, value, callback) => {
        if ( /^([0-9]{18})$/.test(value)) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入身份证号'));
        } else {
            callback(new Error('身份证号不合法'));
        }
    }
    const validatePhone = (rule, value, callback) => {
        if (/^1[345678]\d{9}$/.test(value)) {
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
                            {...getFieldProps('realname', {
                                rules: [
                                    { validator: validateName },
                                ],
                            })}
                            error={!!getFieldError('realname')}
                            onErrorClick={() => {
                                Toast.info(getFieldError('realname'), 1);
                            }}
                            id='realname'
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
                            id="username"
                        >
                            {
                                props.state.flag===0?<div className="has">用户名已存在</div>:''
                            }
                            
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
                            id='idcard'
                        >
                            {
                                props.state.flag2===0?<div className="has">身份证号已存在</div>:''
                            }
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
                            {
                                props.state.flag4===0?<div className="has">手机号已注册</div>:''
                            }
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
                        <div style={{
                            display:"flex",
                        }}>
                            <p style={{
                                margin:"0.1rem",
                                fontSize:"0.14rem"
                            }}>头像上传:</p>
                            <ImagePicker
                                style={{
                                    height:"1.2rem",
                                    width:"1.2rem"
                                }}
                                files={files}
                                onChange={onChange}
                                selectable={files.length < 1}
                                length={1}
                                disableDelete={true}
                            />
                        </div>
                        
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