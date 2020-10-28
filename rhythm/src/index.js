import RecatDom from "react-dom"
import React from "react"

import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App"

import "@a/styles/reset.css"

import {BrowserRouter as Router} from "react-router-dom"

RecatDom.render(
    <Router>
         <App></App>
    </Router>,
    document.querySelector("#root")
)