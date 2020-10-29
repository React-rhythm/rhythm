import React,{Component} from 'react'

import Header from "@c/notice/Header.jsx"

import { Icon} from 'antd-mobile';
import { List, InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';

import Toast from "./StyledUpdate"

import axio from "@u/http"
class Update extends Component{

    handleKeyUp = () => {
        return async(e) => {
           
            if(e.keyCode === 13){
                console.log(e.target)
                let username = e.target.value
                const result = await axio.post("http://localhost:8080/userInfo/userLogin",{username,pas:"666"})
                console.log(result)
            }
        }
    }
    handleClearClick = () => {
        return (e) => {
            // console.log(e.target.parentNode.previousElementSibling.firstElementChild)
        }
    }

    handleSaveClick = () => {
        console.log("保存")
    }
    
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <>
                <Header onClick={this.handleSaveClick}></Header>
                <List renderHeader={() => ''}>
                    <InputItem
                        {...getFieldProps('preice')}
                        placeholder=""
                        extra={<Icon type="cross" onClick={this.handleClearClick()} />}
                        onKeyUp = {this.handleKeyUp()}
                    >用户名</InputItem>
                </List>
                <Toast>设置后，其他人将看到你的用户名。</Toast>
            </>
        )
    }
}
const UpdateUserName = createForm()(Update);

export default  UpdateUserName