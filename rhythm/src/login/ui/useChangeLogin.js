import { useState} from 'react';
import http from '../../utils/http'
const [Password, setPassword] = useState('');

const onSubmit = () => {
    props.form.validateFields({ force: true }, (error) => {
        if (!error) {
            let register=props.form.getFieldsValue()
            let userLogin={
                ...register,
                status:"1",
            }
            const res = http.post('http://123.57.109.224:8081/userInfo/register',JSON.stringify(userLogin))
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
    if(props.state.flag===1){
        callback(new Error('手机号存在'))
    }else if (/^1[34578]\d{9}$/.test(value)) {
        callback();
    } else if (value.length === 0) {
        callback(new Error('请输入手机号'));
    }else{
        callback(new Error('手机号不合法'));
    }
}
const validateuuid= (rule, value, callback) => {
    
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

export{
    validateAddress,
    validateID,
    validateName,
    validatePassword,
    validatePhone,
    validateRePassword,
    validateuuid,
    validateuserName
}