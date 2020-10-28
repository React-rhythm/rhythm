import styled from 'styled-components'

const TitleBar = styled.div `
  .slider {
    width:100%!important;
    height:100%!important;
    > .slider-frame{
        width:100%!important;
        height:100%!important;
        > .slider-list{
            width:100%!important;
            height:100%!important;
            > .slider-slide{
                width:100%!important;
                height:100%!important;
                img{
                    width:100%!important;
                    height:100%!important;
                }
            }
        }
    }
  }
`
const InNow = styled.div `
    .rightNow{
        position: absolute;
        top:82%;
        left:32%;
        width:37.7vw;
        height:6vh;
        background-color: #2493ED;       
        opacity: 0.5;
        border-radius: 5vw;
        font-size:5vw;     
        font-family: PingFangSC;     
        font-weight: bold;
        color: #FFFFFF;
        text-align:center;
        line-height:6vh;
        display:${props => props.index === 2 ? 'block' : 'none'}
    }
`

const Skip = styled.div `
    width: 8.12vw;
    height: 4.06vh;
    font-size: 4.06vw;
    font-family: PingFangSC;
    font-weight: bold;
    color: #999999;
    position: absolute;
    top:3%;
    right:5%;

`

export{
    TitleBar,
    InNow,
    Skip
}