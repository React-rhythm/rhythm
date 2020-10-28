import ReactDom from "react-dom"
import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./App"

import "@a/styles/reset.css"

ReactDom.render(
    <Router>
        <App></App>
    </Router>,
    document.querySelector("#root")
)