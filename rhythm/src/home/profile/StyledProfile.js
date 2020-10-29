import styled from "styled-components"

const Container = styled.div`

`
const HeaderWrap = styled.div`
    height:0;
    font-size:0;
    padding-bottom:44.133%;
    position:relative;
    img{
        width:100%
    }
    .navtar{
        width:2rem;
        height:0.8rem;
        position:absolute;
        top:50%;
        left:50%;
        margin-left:-1rem;
        margin-top:-0.4rem;
        
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .icon{
            width:0.52rem;
            height:0.52rem;
        }
        .status{
            width:1rem;
            height:0.3rem;
            line-height:0.3rem;
            text-align:center;
            border:1px solid #fff;
            border-radius:0.06rem;
            color:#fff;
            font-size:0.14rem;
            margin-top:0.08rem;
        }
    }
`

const ProfileContentWrap = styled.div`
    margin-top:0.1rem;
`
export {
    Container,
    HeaderWrap,
    ProfileContentWrap
}