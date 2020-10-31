import React,{Component} from 'react'

import { Carousel} from 'antd-mobile';

import {SwiperWrap} from "./StyledLitigant"

import banner1 from "@a/images/banner1@2x.png"
import banner2 from "@a/images/banner2@2x.png"
import banner3 from "@a/images/banner3@2x.png"

class Swiper extends Component {
  state = {
    data: [banner1, banner2, banner3],
  }
 
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
               <img
                key={val}
                src={val}
                alt=""
                style={{ width: '100%' , verticalAlign: 'top' }}
              />
          ))}
        </Carousel>
      </SwiperWrap>
    );
  }
}

export default Swiper