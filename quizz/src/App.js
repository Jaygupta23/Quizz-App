import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Test from './Pages/Test';
import TextEnd from './Pages/TextEnd';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/test' element={<Test />} />
        <Route exact path='/testOver' element={<TextEnd />} />
      </Routes>
    </Router>
  );
}

export default App;
