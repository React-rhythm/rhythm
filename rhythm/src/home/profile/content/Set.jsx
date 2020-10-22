import React,{Component} from 'react'

import Header from "@c/notice/Header"
import SetContent from "./SetContent"
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

class SwitchExample extends Component {
  
    state = {
      checked: false,
      checked1: true,
    }
 

  render() {
    
    return (
        <>
           <Header>设置</Header> 
           <List>
                <List.Item
                extra={<Switch
                    checked={this.state.checked}
                    onChange={() => {
                    this.setState({
                        checked: !this.state.checked,
                    });
                    }}
                />}
                >消息推送</List.Item>
            </List>
            <SetContent></SetContent>
        </>
    )
  }
}

const Se = createForm()(SwitchExample);
export default Se
