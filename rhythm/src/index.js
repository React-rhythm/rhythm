import ReactDom from "react-dom"
import React from "react"
import {Provider} from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'


import store from "./store/"
import App from "./App"

import "@a/styles/reset.css"

ReactDom.render(
    <Router>
        <Provider store={store}>
         <App></App>
        </Provider>
    </Router>,
    document.querySelector("#root")
)