import styled from 'styled-components'
import border from '@a/styled/border'
import ellipsis from '@a/styled/ellipsis'

const NoticeListWrap=styled.div`
  height:5.23rem;
  overflow-x:scroll;
  ul{
    display:flex;
    flex-direction:column;
    padding-left:.1rem;
    span{
      color:#999;
      letter-spacing:.01rem
    }
  }
`
const NoticeDetailWrap=styled.div`
    background-color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .container{
      margin-top:.1rem;
      padding:0 .6rem 0 .3rem;
      display:flex;
      flex-direction:column;
      h2{
        padding:.1rem;
        font-weight:normal;
        font-size:.16rem;
        color:#777
      }
      >div:first-child{
        display:flex;
        flex-direction:column;
        >div{
          display:flex;
          justify-content:space-between;
          padding-left:.3rem
        }
      }
      .info{
        display:flex;
        align-items:center;
      }
    }
      button{
        margin:.3rem auto;
        width:2rem;
        height:.35rem;
        background-color:#2493ED;
        color:#fff;
        border:none;
        border-radius:.06rem;
        font-size:.16rem
      }
`
const MsgListWrap=styled.div`
  height:5.23rem;
  overflow-x:scroll;
  ul{
    display:flex;
    flex-direction:column;
    padding-left:.1rem;
    li{
      display:flex;
      flex-direction:column;
      padding:.1rem;
      background-color:#fff;
      margin-top:.1rem;
      letter-spacing:.01rem;
      >div{
        display:flex;
        justify-content:space-between;
        h2{
          font-weight:normal;
        }
        span{
          color:#999;
        }
      }
      p{
        color:#999;
      }
      >p:last-child{
        align-self: flex-end;
      }
    }
  }
`
const P=ellipsis(styled.p``)
const SpanWrap=border(styled.span`
  flex:1;
  color:#999;
  text-align:center;
`)
const LiWrap=styled.li`
  display:flex;
  justify-content:space-between;
  padding:.1rem;
  background-color:#fff;
  margin-bottom:.1rem;
  letter-spacing:.01rem;
  >div{
    h2{
      font-weight:normal;
    }
    p{
      color:#999;
    }
    span{
      color:#2493ED;
    }
  }
  img{
    width:80px;
    height:80px;
  }
`

export {
  NoticeListWrap,
  SpanWrap,
  NoticeDetailWrap,
  MsgListWrap,
  P,
  LiWrap
}