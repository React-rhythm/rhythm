import ReactDom from "react-dom"
import React from "react"
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router} from 'react-router-dom'

import App from "./App"

import "@a/styles/reset.css"
ReactDom.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
    document.querySelector("#root")
)