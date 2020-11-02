import styled from 'styled-components'
import border from '@a/styled/border.js'
import add from '../../../assets/images/add_nor@2x.png.png'

const InputUl = border(styled.input ``)

const TypeWrap = styled.div `
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:0.2rem;
    label{
        display:flex;
        justify-content:space-between;
        width: 0.7rem;
        height: 0.16rem;
        font-size: 0.15rem;
        font-family: PingFang;
        font-weight: normal;
        color: #333333;
        line-height:0.16rem;
        margin-right:0.06rem
    }
    #type{
        width: 2.1rem;
        height: 0.26rem;
        border: 1px solid #D8D8D8;
        border-radius: 0.04rem;   
        font-size: 0.14rem;
        font-family: PingFang;
        font-weight: normal;
        color: #888888;
        padding-left:0.08rem;
    }
`

const Add = styled.div `
    display:flex;
    align-items:flex-start;
    margin-bottom:0.2rem;
    p{
        display:flex;
        justify-content:space-between;
        width: 0.7rem;
        height: 0.16rem;
        font-size: 0.15rem;
        font-family: PingFang;
        font-weight: normal;
        color: #333333;
        line-height:0.16rem;
        margin-right:0.06rem
    }
    .am-image-picker{
        width: 0.98rem;
        height: 0.98rem;
        /* border: 1px solid #D8D8D8; */
        border-radius: 0.04rem;
        /* background:url(${add}) no-repeat 0.28rem 0.28rem; */
        background-size:0.4rem 0.4rem;
    }
    /* label{
        display:flex;
        justify-content:space-between;
        width: 0.7rem;
        height: 0.16rem;
        font-size: 0.15rem;
        font-family: PingFang;
        font-weight: normal;
        color: #333333;
        line-height:0.16rem;
        margin-right:0.06rem
    } */

`

const ButtonWrap = styled.div `
    width:2.6rem;
    display:flex;
    justify-content:space-around;
    .cansel{
        width: 0.94rem;
        height: 0.3rem;
        line-height:0.3rem;
        background: #888888;
        opacity: 0.5;
        border-radius: 0.04rem;
        font-size: 0.15rem;
        font-family: PingFang;
        font-weight: normal;
        color: #FFFFFF;
        text-align:center;
    }
    .upload{
        width: 0.94rem;
        height: 0.3rem;
        background: #FEB834;
        opacity: 0.5;
        border-radius: 0.04rem;
        text-align:center;
        line-height:0.3rem;
        font-size: 0.15rem;
        font-family: PingFang;
        font-weight: normal;
        color: #FFFFFF;
    }
`
export {
    TypeWrap,
    InputUl,
    Add,
    ButtonWrap,
}