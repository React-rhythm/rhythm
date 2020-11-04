import styled from 'styled-components'

import border from '@a/styled/border'

const Container = styled.div `
  position:absolute;
  top:0;
  padding: .1rem .15rem;
  z-index:66;
  background-color: ${props => props.outerbg};
`

const InnerContainer = border(
  styled.div `
    display: flex;
    height: .3rem;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.innerbg};
    svg {
      width: .18rem;
      height: .18rem;
      margin-right: .06rem;
      fill: #fff;
      margin-left: 0.06rem;
    }
    span {
      color: #666;
    }
    .am-list-item {
      background-color: rgba(90,90, 54, 0.5);
    }
    .am-list-item.am-input-item {
        height: .3rem;
        min-height:.3rem;
        border-top-right-radius:0.06rem;
        border-bottom-right-radius:0.06rem;
    }
    .am-list-item .am-input-control input {
        padding: 0;
        color:#fff;
    }
    .am-list-item .am-input-control input::-webkit-input-placeholder{
        color:#fff;
    }
  `
)

export {
  Container,
  InnerContainer
}