import styled from "styled-components"

const Container = styled.div`
    
`

const HeaderWrap = styled.div`
    height:.44rem;
    line-height:.44rem;
    text-align:center;
    font-size:0.16rem;
   
    .am-navbar{
        background-color:#2494ea;
        .am-navbar-left{
            color:#fff;
        }
        .am-navbar-title{
            color:#fff;
        }
    }
`

const TabBarWrap = styled.div`
    .am-tabs-default-bar-tab {
        .am-badge{
            font-size:0.14rem
        }
    }
    .am-tabs-default-bar-underline {
        width: 10% !important;
        left: 20% !important;
        border-width:2px
    }
    .am-tabs-content-wrap {
        margin-top:0.1rem
    }
    .tabContentList{
        background-color: #f5f5f5 !important;
    }
`

const  NoticeItemWrap = styled.div`
    display:flex;
    flex-direction:column;
    padding:0 0.14rem;
    margin-bottom:0.1rem;
    background-color:#fff;
    .title{
        height:0.4rem;
        line-height:0.4rem;
        display:flex;
        justify-content: space-between;
        font-size:0.12rem;
        color:#333333;
    }
    .content{
        line-height:0.18rem;
        color:#676767;
    }
    .more{
        text-align:right;
        margin-top:0.1rem;
        color:#666666;
    }
`
export {
    Container,
    HeaderWrap,
    TabBarWrap,
    NoticeItemWrap
}