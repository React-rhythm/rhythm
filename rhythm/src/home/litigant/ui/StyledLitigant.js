import styled from "styled-components"


const Container = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
`
const SwiperWrap = styled.div`
    height: 0;
    font-size: 0;
    padding-bottom: 66.666667%;
    position:relative;

    .slider.am-carousel {
        position: static !important;
    }
`
const LiWrap=styled.li`
  display:flex;
  justify-content:space-between;
  padding:.1rem;
  background-color:#fff;
  margin-bottom:.1rem;
  letter-spacing:.01rem;
  >div{
    h2{
      font-weight:normal;
    }
    p{  
      color:#999;
    }
    span{
      color:#2493ED;
    }
  }
`

export {
    Container,
    SwiperWrap,
    LiWrap
}