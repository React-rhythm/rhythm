import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actionCreator as ac} from '@/newspaper/home'

import {
    TabBar
} from "antd-mobile"

import Start from "@a/images/首页@2x.png"
import StartActive from "@a/images/首页_点击@2x.png"
import Search from "@a/images/搜索@2x.png"
import SearchActive from "@a/images/搜索_点击@2x.png"
import Profile from "@a/images/我的@2x.png"
import ProfileActive from "@a/images/我的_点击@2x.png"
import Upload from "@a/images/发布@2x.png"
import UploadActive from "@a/images/发布_点击@2x.png"
import MyProfile from "@/home/profile/Profile"
import Publish from '@p/container/Publish'
import { SearchComp } from '../newspaper/search'
import LitigantUi from "@/home/litigant/ui/LitigantUi"

@connect(state=>({
  selectedTab:state.newspaper.tabType
}),dispatch=>({
  changeTab(tab){
    dispatch(ac.changeTab(tab))
  }
}))
class Lawyer extends Component{
    state = {
        selectedTab: 'redTab',
        hidden: false,
        fullScreen: true,
    }
    render() {
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
                <LitigantUi></LitigantUi>
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${Upload}) center center /  21px 21px no-repeat` }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${UploadActive}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="上传"
                key="upload"
                selected={this.props.selectedTab === 'greenTab'}
                onPress={()=>this.props.changeTab("greenTab")}
              >
                <Publish></Publish>
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: `${Search}` }}
                selectedIcon={{ uri: `${SearchActive}` }}
                title="搜索"
                key="search"
                selected={this.props.selectedTab === 'blueTab'}
                onPress={()=>this.props.changeTab("blueTab")}
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
                <MyProfile></MyProfile>
              </TabBar.Item>
            </TabBar>
          </div>
        );
      }
    }


export default  Lawyer


