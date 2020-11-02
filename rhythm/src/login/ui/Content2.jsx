import React, { useState ,useCallback, useEffect} from 'react';
import {  List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import {ContentWrap2} from './StyledLogin'
import useChangeJudgeForm from './useChangeJugdeForm'
const Content2 = (props) => {
    const {handleNameChange}=useChangeJudgeForm()
   const {handleUserNameChange}=useChangeJudgeForm()
   const {handleCourtChange}=useChangeJudgeForm()
   const {handlephoneidChange}=useChangeJudgeForm()
   const {handleVerificationCodeChange}=useChangeJudgeForm()
   const {handlePasswordChange}=useChangeJudgeForm()
   const {handlereplaynewpasswordChange}=useChangeJudgeForm()


   const {realname}=useChangeJudgeForm()
   const {username}=useChangeJudgeForm()
   const {court}=useChangeJudgeForm()
   const {phoneid}=useChangeJudgeForm()
   const {verificationCode}=useChangeJudgeForm()
   const {password}=useChangeJudgeForm()
   const {replaynewpassword}=useChangeJudgeForm()
   


   const changName = useCallback((e)=>{
       console.log(e);
      handleNameChange(e)
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


    const { getFieldProps, getFieldError } = props.form;
    const [Password, setPassword] = useState('');
    // const [judgeForm,setjudgeForm] = useState('');


    const onSubmit = () => {
        
        props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(props.form.getFieldsValue());
                alert('注册成功')
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
        
        if (/^1[34578]\d{9}$/.test(value)) {
            callback();
        } else if (value.length === 0) {
            callback(new Error('请输入手机号'));
        } else {
            callback(new Error('手机号不合法'));
        }
    }
    const validateCode = (rule, value, callback) => {
        if (value && value.length === 6) {
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
                        clear
                        type="text"
                        placeholder="请输入姓名"
                       
                        onBlur={changName}
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
                    >

                    </InputItem>
                    <InputItem
                        {...getFieldProps('verificationCode', {
                            rules: [
                                { validator: validateCode },
                            ],
                        })}
                        error={!!getFieldError('verificationCode')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('verificationCode'), 1);
                        }}
                        clear
                        placeholder="请输入验证码"
                    >
                        <span className="yanzhengma" onClick={props.onGetCode}>发送验证码</span>
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
                    >
                       
                    </InputItem>
                    <InputItem
                        {...getFieldProps('replybewpassword', {
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