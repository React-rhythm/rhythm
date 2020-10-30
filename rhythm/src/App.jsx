import React,{Component} from 'react'
import{
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {NoticeDetail} from '@/newspaper/detail/'

import { Newspaper } from "./newspaper"
class App extends Component{
    render(){
        return (
            <Switch>
              <Route path='/notice' component={NoticeDetail}>
                {/* <NoticeDetail></NoticeDetail> */}
              </Route>
              <Route path='/home' component={Newspaper}>
                {/* <Newspaper></Newspaper> */}
              </Route>
              <Redirect from='/' to='/home'></Redirect>
            </Switch>
            
        )
    }
}
export default App