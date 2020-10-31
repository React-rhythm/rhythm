import React,{Component} from 'react'
import{
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import {NoticeDetail} from '@/newspaper/detail/'


import Login1 from './login/container/Login1'
import MessageLogin from './login/container/MessageLogin'
import Register1 from './login/container/Register1'
import Login2 from './login/container/Login2'
import Register2 from './login/container/Register2'



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

import { Newspaper } from "./newspaper"
class App extends Component{
    render(){
        return (
            <Switch>

                {/* <Route path="/home" component={Home}></Route> */}
                <Route path="/setting" component={Setting}></Route>
                <Route path="/updateusername" component={UpdateUserName}></Route>
                <Route path="/resetpwd" component={ResetPwd}></Route>
                <Route path="/changephone" component={ChangePhone}></Route>
                <Route path="/notice" component={Notice}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/msgdetail" component={MsgDetail}></Route>
                <Route path="/lawyer" component={Lawyer}></Route>
                <Route path="/litigant" component={Litigant}></Route>

       

                <Route path="/guide" component={Guide}></Route>
                <Route path="/role" component={Role}></Route>
                <Route path="/pay" component={Pay}></Route>

             
                <Route path='/login1' component={Login1}></Route>
                <Route path='/login2' component={Login2}></Route>
                <Route path='/MessageLogin' component={MessageLogin}></Route>
                <Route path='/register1' component={Register1}></Route>
                <Route path='/register2' component={Register2}></Route>
      
        
              {/* <Route path='/notice' component={NoticeDetail}></Route> */}
              
              
              <Route path='/home' component={Newspaper}></Route>
               
              
              <Redirect from='/' to='/home'></Redirect>
            </Switch>
            
        )
    }
}
export default App