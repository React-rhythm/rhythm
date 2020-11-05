import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar } from "antd-mobile";
import Type from '../ui/Type'
import Court from '../ui/Court'
import Region from '../ui/Region'
import Idcard from '../ui/Idcard'
import Phoneid from '../ui/Phoneid'
import Party from '../ui/Party'
import CaseId from '../ui/CaseId'
import CaseImg from '../ui/CaseImg'
import http from '../../../utils/https'

import {ButtonWrap} from '../ui/publish'

@withRouter
@connect(
  (state) => {
    return {
      //这里的state就以及是reducer中的state了，加上命名空间cookbook，就可以找到当前模块的state
      form: state.publish.form
    }
  }
)
class Publish extends Component {

  state = {
    type:'ffff'
  }

  toPublish = () => {
    // http.post('')
    http.post('http://10.9.70.205:8080/lawyer/noticeUpload',JSON.stringify(this.props.form))
  }
  
  cancel = () => {
    // console.log(1);
    this.props.history.push('/pay')
  }

  componentDidUpdate(){
    // console.log(this.state.type)
  }

  render() {
    return (
      <>
        <NavBar mode="dark">发布公告</NavBar>
        <div style={{backgroundColor:'#fff',height:'5rem',margin:'0.14rem',padding:'0.15rem'}}>
          <Type></Type>
          <Court></Court>
          <Region></Region>
          <Idcard></Idcard>
          <Phoneid></Phoneid>
          <Party></Party>
          <CaseId></CaseId>
          <CaseImg onChange={this.getImg}></CaseImg>
          <ButtonWrap>
            <div className='cansel' onClick={this.cancel}>取消</div>
            <div className='upload' onClick={this.toPublish}>发布</div>
          </ButtonWrap>
        </div>
      </>
    );
  }
}

export default Publish;
