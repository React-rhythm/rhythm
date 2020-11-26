import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actionCreator as ac} from '@/newspaper/home'
import {actionCreator as acc} from "@h/"
import {
    TabBar
} from "antd-mobile"

import Start from "@a/images/首页@2x.png"
import StartActive from "@a/images/首页_点击@2x.png"
import Search from "@a/images/搜索@2x.png"
import SearchActive from "@a/images/搜索_点击@2x.png"
import Profile from "@a/images/我的@2x.png"
import ProfileActive from "@a/images/我的_点击@2x.png"
import MyProfile from "@/home/profile/Profile"
import { SearchComp } from '@/newspaper/search/'

import LitigantUi from "../ui/LitigantUi"
import { withRouter } from 'react-router-dom'

@connect(state=>({
  selectedTab:state.newspaper.tabType,
  list:state.MsgDetail.list
}),dispatch=>({
  changeTab(tab){
    dispatch(ac.changeTab(tab))
  }
}))
@withRouter
class Litigant extends Component{
    state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: true,
    }
    render() {
      console.log(this.props)
        return (
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${Start}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${StartActive}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="首页"
                key="Start"
                selected={this.props.selectedTab === 'redTab'}
                onPress={()=>this.props.changeTab("redTab")}
              >
                <LitigantUi {...this.props}></LitigantUi>
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${Search}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${SearchActive}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="搜索"
                key="search"
                selected={this.props.selectedTab === 'greenTab'}
                onPress={()=>this.props.changeTab("greenTab")}
              >
                <SearchComp></SearchComp>
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: `${Profile}` }}
                selectedIcon={{ uri: `${ProfileActive}` }}
                title="我的"
                key="my"
                selected={this.props.selectedTab === 'yellowTab'}
                onPress={()=> this.props.changeTab("yellowTab")}
              >
                <MyProfile {...this.props}></MyProfile>
              </TabBar.Item>
            </TabBar>
          </div>
        );
      }
        
    }


export default  Litigant
