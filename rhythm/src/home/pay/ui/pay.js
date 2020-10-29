import styled from 'styled-components'
import border from '@a/styled/border.js'

const InputUl = border(styled.input ``)

const PayWrap = styled.div `
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
    #pay{
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

const ButtonPay = styled.div `
    width: 2.6rem;
    height: 0.4rem;
    background: #2493ED;
    opacity: 0.5;
    border-radius: 0.04rem;
    line-height:0.4rem;
    text-align:center;
    margin-top:0.5rem;
    margin-left:0.1rem;
    div{
        font-size: 0.16rem;
        font-family: PingFang;
        font-weight: 400;
        color: #FFFFFF;
    }

`

export {
    PayWrap,
    InputUl,
    ButtonPay,
}