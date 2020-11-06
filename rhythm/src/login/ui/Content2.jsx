import React, { useState ,useEffect} from 'react';
import {  List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import {ContentWrap2} from './StyledLogin'
import {validateAddress, validateID,validateName,validatePassword,validatePhone,validateRePassword,validateuuid,validateuserName} from './useChangeLogin'    

const Content2 = (props) => {
    const { getFieldProps, getFieldError } = props.form;
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