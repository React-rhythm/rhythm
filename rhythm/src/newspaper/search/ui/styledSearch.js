import styled from 'styled-components'

const InputWrap=styled.div`
  width:90%;
  margin:.1rem auto;
  div{
    display:flex;
    border-radius:.05rem;
    padding:.02rem .15rem;
    background-color:#fff;
    justify-content:space-between;
    align-items:center;
    input{
      border:none;
      height:.25rem;
    }
    svg{
      fill:#2B96ED;
    }
  }
`
const SearchNoticeWrap= styled.ul`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:5.23rem;
  overflow-x:scroll;
  span{
    color:#108EE9;
    margin-bottom:.05rem;
  }
  li{
    width:100%
  }
`

export{
  InputWrap,
  SearchNoticeWrap
}