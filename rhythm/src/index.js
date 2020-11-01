import ReactDom from "react-dom"
import React from "react"
import {Provider} from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'


import App from "./App"

import "@a/styles/reset.css"
import "@a/iconfont/iconfont.css"
ReactDom.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.querySelector("#root")
)