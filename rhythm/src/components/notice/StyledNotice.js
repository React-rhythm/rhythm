import styled from "styled-components"

const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
`

const HeaderWrap = styled.div`
    height:.44rem;
    line-height:.44rem;
    text-align:center;
    font-size:0.16rem;
    width:100%;
    
    .am-navbar{
        background-color:${props => props.location.state.headbg? props.location.state.headbg : "#2494ea"} ;
        .am-navbar-left{
            color:${props => props.location.state.color ? props.location.state.color : "#fff" } !important;
        }
        .am-navbar-title{
            color:${props => props.location.state.color ? props.location.state.color : "#fff" } !important;
        }
    }
    
`

const TabBarWrap = styled.div`
    /* flex:1; */
    .am-tabs-default-bar-tab {
        .am-badge{
            font-size:0.14rem
        }
    }
    .am-tabs-default-bar-underline {
        /* width: 10% !important;
        left: 20% !important; */
        border-width:2px
    }
    .am-tabs-content-wrap {
        margin-top:0.1rem;
        /* overflow:hidden; */
    }
    
    .tabContentList{
        overflow-y:scroll;
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