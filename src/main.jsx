import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepage from './Homepage/Homepage.jsx'
import Aboutpage from './Aboutpage/Aboutpage.jsx'
import Errorpage from './Errorpage/Errorpage.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./i18.js"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="*" element={<Errorpage />} />
        </Routes>
    </Router>
  </React.StrictMode>,
)
