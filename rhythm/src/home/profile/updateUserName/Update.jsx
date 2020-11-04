import React,{Component,useCallback} from 'react'

import Header from "@c/notice/Header.jsx"

import { Icon} from 'antd-mobile';
import { List, InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';

import Toast from "./StyledUpdate"
import http from "@u/http"

class Update extends Component{

    //拿到当前的用户名存在state
    state = {
        username:"yaqi" 
    }

    handleChange = () => {
        return (e) => {
            this.setState({
                username:e
            })  
        }
    }
   
    handleClearClick = () => {
        this.setState({
            username:""
        })
    }

    handleSaveClick = () => {
        return async(e) => {
            const username = this.state.username
            const result = await http.get("http://localhost:8080/userInfo/nameUpdate",{username})
            console.log(result)
            this.setState({
                username:""
            })
        }
    }
    
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <>
                <Header onClick={this.handleSaveClick()}></Header>
                <List renderHeader={() => ''}>
                    <InputItem
                        {...getFieldProps('preice')}
                        placeholder=""
                        extra={<Icon type="cross" onClick={this.handleClearClick} />}
                        value={this.state.username}
                        onChange={this.handleChange()}
                    >用户名</InputItem>
                </List>
                <Toast>设置后，其他人将看到你的用户名。</Toast>
            </>
        )
    }
}
const UpdateUserName = createForm()(Update);

export default  UpdateUserName