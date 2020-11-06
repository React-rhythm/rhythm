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

export {
    Container,
    SwiperWrap
}