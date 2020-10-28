import React,{Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from "./home/Home.jsx"
import Guide from '@g/Guide.jsx'
import Role from '@r/Role.jsx'
class App extends Component{
    render(){
        return (
            <Switch>
                <Route path="/guide" component={Guide}></Route>
                <Route path="/role" component={Role}></Route>
                <Route path="/home" component={Home}></Route>
                <Redirect from="/" to="/Guide"></Redirect>
            </Switch>
            
        )
    }
}
export default App