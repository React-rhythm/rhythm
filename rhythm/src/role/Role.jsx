import React, { Component } from 'react';
import {
    Wrap,
    ChangeRole,
    OverRide,
} from './role'

class role extends Component {
    state = {
        isShow : false,
        currentX : 0,
        currentY : 0,
        roles : 1,
    }

    toReg = (index) => {
        return (e) => {
            this.setState({
                currentY : e.pageY,
                currentX : e.pageX,
                isShow : true,
                roles : index
            })
        }
    }

    toCur = () => {
        this.setState({
            isShow : false
        })
    }

    signIn = () => {
        let { history } = this.props
        // history.push('/home',{roles : this.state.roles})
        // console.log(this.state.roles);
        if(this.state.roles == 1){
            history.push('/lawyer',{roles : this.state.roles})
        }else if (this.state.roles == 0){
            history.push('/litigant',{roles : this.state.roles})
        }else{
            history.push('/home',{roles : this.state.roles})
        }
    }
    logIn = () => {
        let { history } = this.props
        history.push('/login1',{roles : this.state.roles})
        // console.log(this.state.roles);
    }

    toHome = () => {
        let { history } = this.props
        history.push('/home',{roles : 2})
    }

    componentDidUpdate(){
        // console.log(this.state.currentX)
        // console.log(this.state.currentY)
        console.log(this.state.roles);
    }

    render() {
        return (
            <Wrap>
                <div
                onClick={this.toHome}
                style={{
                    position:'absolute',
                    top:'0.2rem',
                    right:'0.2rem',
                    color:'#fff',
                    fontFamily:'PingFang',
                    fontWeight:'500'
                }}
                >游客进入</div>
                <ChangeRole role={1} onClick={this.toReg(1)} isShow={this.state.isShow}>我是法官</ChangeRole>
                <ChangeRole role={0} onClick={this.toReg(0)} isShow={this.state.isShow}>我是当事人</ChangeRole>
                <ChangeRole role={-1} onClick={this.toReg(-1)} isShow={this.state.isShow}>我是报社</ChangeRole>
                <OverRide onClick={this.toCur} pos={this.state}>
                    <div className='reg' onClick={this.signIn}>注册</div>
                    <div className='log' onClick={this.logIn}>登录</div>
                </OverRide>
            </Wrap>
        );
    }
}

export default role;