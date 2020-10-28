import React,{Component} from 'react'
<<<<<<< HEAD
// import Home from './home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login1 from './home/login/container/Login1'
import MessageLogin from './home/login/container/MessageLogin'
import Register1 from './home/login/container/Register1'
import Login2 from './home/login/container/Login2'
import Register2 from './home/login/container/Register2'
class App extends Component{
    render(){
        return (
                // <Home></Home>
                <Switch>
                    <Route path='/home/login1' component={Login1}></Route>
                    <Route path='/home/login2' component={Login2}></Route>
                    <Route path='/home/MessageLogin' component={MessageLogin}></Route>
                    <Route path='/home/register1' component={Register1}></Route>
                    <Route path='/home/register2' component={Register2}></Route>
                    <Redirect from='/' to='/home/login1'></Redirect>
                </Switch>
           
=======
import {Switch,Route,Redirect} from "react-router-dom"

import Home from "./home/Home"
import Setting from"./home/profile/content/Set"
import UpdateUserName from "./home/profile/updateUserName/Update"
import ResetPwd from "./home/profile/resetPwd/ResetPwd"
import ChangePhone from "./home/profile/changePhone/ChangePhone"
import Notice from "./components/notice/Notice"
import About from "./home/profile/About/About"

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
                <Redirect from="/" to="/home"></Redirect>
            </Switch>
>>>>>>> done
            
        )
    }
}
export default App