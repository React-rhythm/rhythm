import styled from 'styled-components';

const SuccessWrap=styled.div`
    width: 80%;
    height: 0.4rem;
    background: #2493ed;
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
const RegisterImgWrap=styled.div`
    margin-top:0.1rem;
    height:1.9rem;
    background-color:#fff;
    display: flex; 
    justify-content: center;
    align-items: center;
    align-content:center;
   
    img{
        
        height:0.75rem;
        width:0.75rem;
        
         
    }
    div{
        height:0.75rem;
        line-height: 0.75rem;
        font-size:0.17rem;
        font-weight:900;
    }

`
    
export{
    SuccessWrap,
    RegisterImgWrap
}