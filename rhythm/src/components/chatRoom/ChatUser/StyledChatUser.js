import styled from "styled-components"
import border from "@a/styled/border.js"

const ChatWrap = styled.div`
    display:flex;
    width:100%;
    padding:0.15rem 0 0.15rem 0.2rem ;
    align-items:center;
    background-color:#fff;
    height:0.92rem;
    .avatar{
        width:20%;
        height:100%;
    }
    .chatMain{
        flex:1;
        height:100%;
        display:flex;
        padding-right:0.2rem;
        border-bottom:1px solid #ccc;
        .content{
            flex:1;
            .username{
                color:#1d1d1d;
                font-size:0.17rem;
            }
            .chatContent{
                color:#9f9f9f;
                font-size:0.15rem;
            }
        }
        .date{
            width:15%;
            
        }
    }
`

export {
    ChatWrap
}