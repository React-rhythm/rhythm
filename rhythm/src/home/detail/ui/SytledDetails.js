import styled from 'styled-components'

const Container=styled.div`
     padding:.15rem; 
    background:#fff;
    margin-top:0.1rem;
    padding-bottom:0;
`
const Img=styled.div`
    height:1.65rem;
    h1{
        font-size: 0.16rem;
        font-family: PingFang;
        font-weight: 400;
        color: #333333;
    }
    >div{
        
        margin-top:0.15rem;
        display:flex;
        
       
        img{
            margin-left:0.20rem;
            height:1.06rem;
            width:.79rem;
        }
    }
    
   
`

const Content1 =styled.div`
    height:100%;
    background-color:#fff;
    padding:0 .15rem; 
    p{
        
        line-height:0.4rem;
        span{
            display:inline-block;
            width:0.69rem;
            font-size: 0.16rem;
            font-family: PingFang;
            font-weight: 400;
            color: #333333;
            word-break:keep-all;
            white-space:nowrap;
            /* overflow:hidden;
            >span{
                width:100%;
                display:inline-block;
            } */
        }
        
        input{
            height:0.2rem;
            width:2.22rem;
            border:none;
            border-bottom:1px solid #D8D8D8;
            text-align:center;
        }
    }
`
const WillPayWrap=styled.div`
    width: 2.69rem;
    height: 0.4rem;
    background: #2493ED;
    border-radius: 8px;
    font-size: 0.17rem;
    font-family: PingFang;
    font-weight: 400;
    color: #FFFFFF;
    text-align:center;
    line-height:0.4rem;
    margin:0 auto;
    margin-top:0.35rem;
`

export {
    Container,
    Img,
    Content1,
    WillPayWrap
}