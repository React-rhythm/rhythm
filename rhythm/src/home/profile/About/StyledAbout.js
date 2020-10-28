import styled from "styled-components"

const Container  = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    .imgWrap{
        flex:1;
        border-top:1px solid #ccc;
        padding: 0 0.14rem;
        background-color:#fff;
        
        img{
            width:100%;
            margin-top:0.3rem;
        }
    }
    
`

export {
    Container
}