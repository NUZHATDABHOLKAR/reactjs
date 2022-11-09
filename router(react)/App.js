import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About';
import Contact from './Contact';
import  './index.css'
function App() {
  return (
    < >
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route> 
    </Routes>
        {/* <div className='a1'>

        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">About</a>
        <a href="">Products</a> */}
        
    </> 
        
  )
}

export default App