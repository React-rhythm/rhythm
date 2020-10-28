import React,{Component} from 'react'

import Header from "@c/notice/Header.jsx"

import { Icon} from 'antd-mobile';
import { List, InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';

import Toast from "./StyledUpdate"

class Update extends Component{
    
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <>
                <Header></Header>
                <List renderHeader={() => ''}>
                    <InputItem
                        {...getFieldProps('preice')}
                        placeholder=""
                        extra={<Icon type="cross"  />}
                    >用户名</InputItem>
                </List>
                <Toast>设置后，其他人将看到你的用户名。</Toast>
            </>
        )
    }
}
const UpdateUserName = createForm()(Update);

export default  UpdateUserName