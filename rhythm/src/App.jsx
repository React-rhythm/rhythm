import React,{Component} from 'react'
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
           
            
        )
    }
}
export default App