import React from 'react'
import { Card, WhiteSpace } from 'antd-mobile';
import Header from "@c/notice/Header"

const MsgDetail = () => {
   
        return (
            <>
                <Header></Header>
                <div>
                    <WhiteSpace size="lg" />
                    <Card full>
                    <Card.Header
                        title="消息状态"
                        extra={<span>已公告</span>}
                    />
                    <Card.Header
                        title="消息时间"
                        extra={<span>2017-5-23</span>}
                    />
                     <Card.Header
                            title="消息内容"
                        />
                    <Card.Body>
    
                        <div>相关法律规定：最高人民检察院《关于审理人深损害赔偿案件适用法律若干问题的解释》
                    第六条：从事住宿、餐饮、娱乐等经营活动或者其他社会活动的自然人...
                    相关法律规定：最高人民检察院《关于审理人深损害赔偿案件适用法律若干问题的解释》
                    第六条：从事住宿、餐饮、娱乐等经营活动或者其他社会活动的自然人...</div>
                    </Card.Body>
                    {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
                    </Card>
                </div>
            </>
        )
    
}

export default MsgDetail