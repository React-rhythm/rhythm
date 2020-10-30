import React,{Component} from 'react'

import { Carousel} from 'antd-mobile';

import {SwiperWrap} from "./StyledLitigant"

class Swiper extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={false}
          infinite
        >
          {this.state.data.map(val => (
              <img
              key={val}
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
          ))}
        </Carousel>
      </SwiperWrap>
    );
  }
}

export default Swiper