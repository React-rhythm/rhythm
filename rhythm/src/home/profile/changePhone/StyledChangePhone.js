import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:0.3rem;
    .logoPhone{
        padding-bottom:0.2rem;
        img{
            width:0.16rem;
            height:0.24rem;
        }
    }
    .phoneNumber{
        color:#333333;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        p{
            line-height:0.25rem;
            font-size:0.14rem;
        }
    }
    .remind{
        font-size:0.12rem;
        color:#989898;
    }
    .am-list{
        margin-top:0.5rem;
    }
    .am-list-item .am-input-control input {
        font-size: 14px;
   }
   .am-list-item {
    background-color: #f5f5f5;
    }
    .am-list-item .am-input-extra {
        color:#94c4f2;
    }
    .am-button-primary {
        /* background-color: #108ee9; */
        width:100%;
        background-color: #94c4f2;
        margin:0.25rem 0.34rem;
    }
`

export {
    Container
}