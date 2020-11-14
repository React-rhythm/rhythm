import React, { Component } from 'react'
import HomeUi from '../ui/HomeUi'
import {connect} from 'react-redux'
import {actionCreator as ac} from '@/newspaper/home'
import https from '@u/https'

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
    let result=await https.get('http://10.9.27.166:8080/searchInfo/show')
    console.log(result)
    this.setState({
      list:result.SearchDto
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