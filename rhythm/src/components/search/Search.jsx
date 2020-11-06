import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {InputItem} from "antd-mobile"

import {actionCreator as ac} from '@/newspaper/home'
import {
  Container,
  InnerContainer
} from './StyledSearch'

@connect(state=>({
  selectedTab:state.newspaper.tabType
}),dispatch=>({
  changeTab(tab){
    dispatch(ac.changeTab(tab))
  }
}))
@withRouter
class Search extends Component {

  state = {
    caseNumber:""
  }
  handleChange = () => {
    return (e) => {
      
      this.setState({
        caseNumber:e
      })
    }
  }
  handleFocus = () => {
    this.props.changeTab("greenTab")
  }
  render() {
    return (
      <Container {...this.props}>
        <InnerContainer {...this.props}>
          <svg t="1603089251391" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3729" width="200" height="200"><path d="M950.162286 732.891429l204.544 148.955428a36.571429 36.571429 0 0 1 8.118857 51.017143l-17.554286 24.283429a36.571429 36.571429 0 0 1-51.2 8.118857l-199.899428-145.590857A489.691429 489.691429 0 0 1 512 1002.605714C241.042286 1002.605714 21.394286 782.957714 21.394286 512 21.394286 241.042286 241.042286 21.394286 512 21.394286 782.957714 21.394286 1002.605714 241.042286 1002.605714 512c0 79.469714-18.907429 154.514286-52.443428 220.891429zM512 899.108571c213.796571 0 387.108571-173.348571 387.108571-387.108571 0-213.796571-173.348571-387.108571-387.108571-387.108571C298.203429 124.891429 124.891429 298.24 124.891429 512c0 213.796571 173.348571 387.108571 387.108571 387.108571z" p-id="3730"></path></svg>
          <InputItem 
            placeholder="请输入查询案号"
            value={this.state.caseNumber}
            onChange={this.handleChange()}
            onFocus={this.handleFocus}
          ></InputItem>
        </InnerContainer>
      </Container>
    )
  }
}
export default  Search