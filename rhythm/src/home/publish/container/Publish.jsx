import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavBar,Toast } from "antd-mobile";
import Type from '../ui/Type'
import Day from '../ui/Day'
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
      form: state.publish.form,
    }
  }
)
class Publish extends Component {

  state = {
    whether:1
  }

  failToast= () => {
    Toast.fail('该案号已经存在 ', 1);
  }

  successToast = () => {
    Toast.success('发布公告成功 ', 1);
  }

  toPublish = () => {
    if(this.state.whether === 0) {
      this.failToast()
      return 
    }
    else {
      http.post('http://10.9.27.166:8080/lawyer/noticeUpload',JSON.stringify(this.props.form))
      this.successToast()
      // setTimeout(() => {
      //   window.location.reload()
      // },2000)
    }
  }

  cancel = () => {
    // console.log(1);
    this.props.history.push('/pay')
  }

  isPublish = (flag) => {
      this.setState({
        whether:flag
      })
      console.log(this.state.whether)
  }

  componentDidMount(){
    setTimeout(() => {
      Toast.hide();
    }, 3000);
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
          <Day></Day>
          <CaseId onCaseId={this.isPublish}></CaseId>
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
