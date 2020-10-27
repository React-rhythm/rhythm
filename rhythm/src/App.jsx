import React,{Component} from 'react'
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
            
        )
    }
}
export default App