import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import guide0 from '@a/images/guide1.png';
import guide1 from '@a/images/guide2.png';
import guide2 from '@a/images/guide3.png';
import { 
    TitleBar,
    InNow,
    Skip
 } from './guide'
class Guide extends Component {
    state = {
        curIndex : 0
    }

    changeIndex = (index) => {
        this.setState({
            curIndex : index
        })
    }

    toRole = () => {
      let { history } = this.props
      history.push('/role')
    }

    componentDidUpdate(){
        // console.log(this.state.curIndex)

    }
    

  render() {
    return (
        <>
      <TitleBar style={{width:'100%',height:'100%'}}>
          <Carousel 
          autoplay={false} 
          infinite={false}
          dotStyle={{
              backgroundColor:' #2493ED',
              opacity: 0.5,
          }}
          dotActiveStyle={{
            backgroundColor:' #2493ED'
          }}
          afterChange={this.changeIndex}
          >
            <img
            src={guide0}
            alt=""
            />
            <img
            src={guide1}
            alt=""
            />
            <img
            src={guide2}
            alt="" 
            />
            
          </Carousel>
      </TitleBar>
      <InNow index={this.state.curIndex}><div className='rightNow' onClick={this.toRole}>立即进入</div></InNow>
      <Skip><div className='skip' onClick={this.toRole}>跳过</div></Skip>
      </>
    );
  }
}

export default Guide;
