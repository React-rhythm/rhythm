import styled from 'styled-components'
import bc from '../assets/images/role.png'
import judge from '../assets/images/judge.png'
import parties from '../assets/images/parties.png'
import newspaper from '../assets/images/touxiang4@2x.png'

const Wrap = styled.div `
    display:flex;
    position: relative;
    flex-direction:column;
    align-items:center;
    height:100%;
    width:100%;
    background-image:url(${bc});
    background-size:100% 100%;
    padding-top:67vh;
`

const ChangeRole = styled.div `
    width: 77.43vw;
    height: 10vw;
    padding-left:31.32vw;
    box-shadow: 0px 0.05rem 0px 0px rgba(38, 114, 224, 0.4);
    border-radius: 5.8vw;
    font-size: 4.46vw;
    font-family: PingFangSC;
    font-weight: bold;
    color: #2B93ED;
    line-height: 10vw;
    opacity: 0.95;
    background:#FFFFFF url(${newspaper}) no-repeat 22.62vw 2.32vw;
    background-image:url(${props => {if(props.role === 1) return judge;else if(props.role === 0) return parties;else return newspaper}});
    background-size:5.8vw 6.38vw;
    margin-bottom:0.22rem;
    display:${props => props.isShow === true ? 'none' : 'block'}
`

const OverRide = styled.div `
    position: absolute;
    top:50vh;
    z-index:9999;
    width: 80vw;
    height: 60vh;
    background-color:rgba(44,151,237,0);
    display:flex;
    justify-content:space-around;
    align-items:center;
    display:${props => props.pos.isShow === true ? 'flex' : 'none'};
    .reg,.log{
        width:14vw;
        height:14vw;
        border-radius:50%;
        background-color:#fff;
        line-height:14vw;
        text-align:center;
        font-size:4.06vw;
    }
`

export{
    Wrap,
    ChangeRole,
    OverRide,
}