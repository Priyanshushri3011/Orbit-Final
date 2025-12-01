import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoundationCourse from './Components/Courses/FoundationCourse'
import TargetCourse from './Components/Courses/TargetCourse'

import Home from './Home'
import DropperBatchNEET from './Components/Courses/DropperBatchNEET'
import DropperBatchJEE from './Components/Courses/DropperBatchJEE'
import DropperBatch from './Components/Courses/DropperBatch'

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/foundationcourse' element={<FoundationCourse />} />
      <Route path='/targetbatch' element={<TargetCourse />} />
      <Route path='/dropperbatchneet' element={<DropperBatchNEET/>}/>
      <Route path='/dropperbatchjee' element ={<DropperBatchJEE/>}/>
      <Route path= '/dropperbatch' element = {<DropperBatch/>}/>

    </Routes>
  )
}

export default Allroutes;