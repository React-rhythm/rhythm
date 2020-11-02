import React, { Component } from 'react'
import NoticeDetailUi from '../ui/NoticeDetailUi'

export default class NoticeDetail extends Component {
  id=this.props.location.state.id
  componentDidMount(){
    //ajax获取详情信息
  }

  render() {
    return (
      <NoticeDetailUi></NoticeDetailUi>
    )
  }
}

