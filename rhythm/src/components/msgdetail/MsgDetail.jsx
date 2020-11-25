import React from 'react'
import { useStore} from "react-redux";
import { Card, WhiteSpace } from 'antd-mobile';
import Header from "@c/notice/Header"
import {withRouter} from "react-router-dom"
import http from "@u/https"


const MsgDetail = (props) => {
        console.log(props)
        const store = useStore().getState()
        console.log(store)
        const {name} = store.getusername
        
        console.log(name)
        
        const changeTime = (time) => {
            var commonTime = "";
            if(time){
                var unixTimestamp = new Date(time*1) ;
                commonTime = unixTimestamp.toLocaleString();
            }
             return commonTime;
        }
        let {state:{flag,time,msg}} = props.history.location

        const handleChangeNoticeFlag = async() => {
            const res = await http.get(`http://114.67.247.63:8010/userChat/updateMagFlag/${time}/toName/${name}`)
            console.log(res)
        }

        return (
            <>
                <Header></Header>
                <div onClick={handleChangeNoticeFlag}>
                    <WhiteSpace size="lg" />
                    <Card full>
                    <Card.Header
                        title="消息状态"
                        extra={<span>{flag === 1? "已读" : "未读"}</span>}
                    />
                    <Card.Header
                        title="消息时间"
                        extra={<span>{changeTime(time)}</span>}
                    />
                     <Card.Header
                            title="消息内容"
                        />
                    <Card.Body>
                        <div>{msg}</div>
                    </Card.Body>
                    {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
                    </Card>
                </div>
            </>
        )
    
}

export default withRouter(MsgDetail)