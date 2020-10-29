import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { NavBar } from "antd-mobile";
import Type from '../ui/Type'
import Court from '../ui/Court'
import Region from '../ui/Region'
import Idcard from '../ui/Idcard'
import Phoneid from '../ui/Phoneid'
import Party from '../ui/Party'
import CaseId from '../ui/CaseId'
import CaseImg from '../ui/CaseImg'

import {ButtonWrap} from '../ui/publish'

@withRouter
class Publish extends Component {

  toPublish = () => {
    this.props.history.push('/pay')
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
          <CaseImg></CaseImg>
          <ButtonWrap>
            <div className='cansel'>取消</div>
            <div className='upload' onClick={this.toPublish}>发布</div>
          </ButtonWrap>
        </div>
      </>
    );
  }
}

export default Publish;
