import React from 'react'
import { Routes,Route } from 'react-router-dom'
import All from './All'
import Lunch from './Lunch'
import Navbar from './Navbar'
import Breakfast from './Breakfast'
import Evening from './Evening'
import Dinner from './Dinner'
function App() {
  return (<>
  <Navbar/>
 <div> 
    <Routes>
        <Route path='/' element={<All/>}></Route>
        <Route path='/Breakfast' element={<Breakfast/>}></Route>
        <Route path='/Lunch' element={<Lunch/>}></Route> 
        <Route path='/Evening' element={<Evening/>}></Route>
        <Route path='/Dinner' element={<Dinner/>}></Route>
    </Routes> 
    </div>
    </>
  )
}

export default App