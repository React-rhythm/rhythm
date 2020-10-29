import React,{Component} from 'react'
import {withRouter} from "react-router-dom"
import {NoticeItemWrap} from "./StyledNotice"


@withRouter
class NoticeItem extends Component{

    handleDetailClick = () => {
        return () => {
          this.props.history.push("/msgdetail",{title:"消息详情",headbg:"#fff",color:"#000"})
        }
    }
    render(){
        return (
            <NoticeItemWrap>
                <div className="title">
                    <span>已登报111</span>
                    <span>2017-5-23</span>
                </div>
                <div className="content">
                    相关法律规定：最高人民检察院《关于审理人深损害赔偿案件适用法律若干问题的解释》
                    第六条：从事住宿、餐饮、娱乐等经营活动或者其他社会活动的自然人...
                </div>
                <p className="more" onClick={this.handleDetailClick()}>了解更多</p>
            </NoticeItemWrap>
        )
    }
}

export default NoticeItem