import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Content from './component/Content'
import About from './component/About'
import Navebar from './Page/Navebar'

function App() {
  return (
    <>
    <Navebar/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/content' element={<Content/>}  />


    </Routes>
    
    </>
  )
}

export default App