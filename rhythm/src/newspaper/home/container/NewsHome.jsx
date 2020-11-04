import React, { Component } from 'react'
import HomeUi from '../ui/HomeUi'
import {connect} from 'react-redux'
import {actionCreator as ac} from '@/newspaper/home'
import http from '@/utils/http'

@connect(
  (state)=>{
    return{
      noticeType:state.newspaper.noticeType
    }
  },
  dispatch=>({
    changeNotice(type){
      dispatch(ac.changeNotice(type))
    }
  })
)
class NewsHome extends Component {
  state={
    list:[]
  }

  handleClick=(type)=>{
    return this.props.changeNotice(type)
  }
  async componentDidMount(){
    let result=await http.get({url:'/api/name'})
    this.setState({
      list:result.data
    })
  }
  render() {
    return (
      <HomeUi type={this.props.noticeType}
      onChangeNotice={this.handleClick}
      list={this.state.list}
      ></HomeUi>
    )
  }
}
export default NewsHome