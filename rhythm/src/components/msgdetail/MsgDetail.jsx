import React from 'react'
import { Card, WhiteSpace } from 'antd-mobile';
import Header from "@c/notice/Header"
import {withRouter} from "react-router-dom"


const MsgDetail = (props) => {
        
        let {state:{status,createTime,content}} = props.history.location

        return (
            <>
                <Header></Header>
                <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                    <Card.Header
                        title="消息状态"
                        extra={<span>{status}</span>}
                    />
                    <Card.Header
                        title="消息时间"
                        extra={<span>{createTime.slice(0,10)}</span>}
                    />
                     <Card.Header
                            title="消息内容"
                        />
                    <Card.Body>
                        <div>{content}</div>
                    </Card.Body>
                    {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
                    </Card>
                </div>
            </>
        )
    
}

export default withRouter(MsgDetail)