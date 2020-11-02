import React,{Component} from 'react'
import{
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {NoticeDetail} from '@/newspaper/detail/'



import Login from './login/container/Login'
import MessageLogin from './login/container/MessageLogin'
import Register1 from './login/container/Register1'
import Register2 from './login/container/Register2'
import Register3 from './login/container/Register3'


import Home from "./home/Home"
import Setting from"./home/profile/content/Set"
import UpdateUserName from "./home/profile/updateUserName/Update"
import ResetPwd from "./home/profile/resetPwd/ResetPwd"
import ChangePhone from "./home/profile/changePhone/ChangePhone"
import Notice from "./components/notice/Notice"
import About from "./home/profile/About/About"
import MsgDetail from "./components/msgdetail/MsgDetail"
import Lawyer from "@/lawyer/Lawyer"
import Litigant from "@/home/litigant/container/Litigant"



import Guide from '@g/Guide.jsx'
import Role from '@r/Role.jsx'
import Pay from './home/pay/container/Pay'



import Aaa from './login/container/shiyan'
import { Newspaper } from "./newspaper"
class App extends Component{
    render(){
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/setting" component={Setting}></Route>
                <Route path="/updateusername" component={UpdateUserName}></Route>
                <Route path="/resetpwd" component={ResetPwd}></Route>
                <Route path="/changephone" component={ChangePhone}></Route>
                <Route path="/notice" component={Notice}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/guide" component={Guide}></Route>
                <Route path="/role" component={Role}></Route>
                <Route path='/login1' component={Login}></Route> 
                <Route path='/MessageLogin' component={MessageLogin}></Route>
                <Route path='/lawyer' component={Register1}></Route>
                <Route path='/litigant' component={Register2}></Route>
                <Route path='/newspaper' component={Register3}></Route>
                

                <Route path='/aaa' component={Aaa}></Route>
                <Redirect from="/" to="/Guide"></Redirect>
               
              
              <Redirect from='/' to='/role'></Redirect>
            </Switch>
            
        )
    }
}
export default App