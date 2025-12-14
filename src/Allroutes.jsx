import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoundationCourse from './Components/AllCourses/FoundationCourse'
import TargetCourse from './Components/AllCourses/TargetCourse'
import Home from './Home'
import DropperBatchNEET from './Components/AllCourses/DropperBatchNEET'
import DropperBatchJEE from './Components/AllCourses/DropperBatchJEE'
import DropperBatch from './Components/AllCourses/DropperBatch'
import NDATargetBatch from './Components/AllCourses/NDATargetBatch'
import CrashCourse from './Components/AllCourses/CrashCourse'
import TestSeries from './Components/AllCourses/TestSeries'
import Events from './Components/Events/Events'
import CoursesAll from './Components/CoursesAll'
import AboutusPage from './Components/AboutusPage'
import ContactusPage from './Components/ContactusPage'
import FacultyPage from './Components/FacultyPage'

function Allroutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/allcourses'element={<CoursesAll/>}/>
      <Route path='/aboutus' element ={<AboutusPage/>}/>
      <Route path='/faculty' element = {<FacultyPage/>}/>
      <Route path='/contactus' element ={<ContactusPage/>}/>
      <Route path='/foundationcourse' element={<FoundationCourse />} />
      <Route path='/targetbatch' element={<TargetCourse />} />
      <Route path='/dropperbatchneet' element={<DropperBatchNEET/>}/>
      <Route path='/dropperbatchjee' element ={<DropperBatchJEE/>}/>
      <Route path= '/dropperbatch' element = {<DropperBatch/>}/>
      <Route path= '/ndatargetbatch' element = {<NDATargetBatch/>}/>
      <Route path='/crashcourse' element = {<CrashCourse/>}/>
      <Route path='/testseries' element = {<TestSeries/>}/>
      <Route path='/events' element = {<Events/>}/>

    </Routes>
  )
}

export default Allroutes;