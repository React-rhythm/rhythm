import React,{Component} from 'react'

import { Carousel} from 'antd-mobile';

import {SwiperWrap} from "./StyledLitigant"

import banner1 from "@a/images/banner1@2x.png"
import banner2 from "@a/images/banner2@2x.png"
import banner3 from "@a/images/banner3@2x.png"


class Swiper extends Component {
  state = {
    data: ["1", "2", "3"],
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
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [banner1, banner2, banner3],
      });
    }, 100);
  }
}

export default Swiper