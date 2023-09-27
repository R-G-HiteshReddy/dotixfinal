import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Quiz from './pages/quiz'


export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz/:id' element={<Quiz/>}/>
      </Routes>
    </div>
  )
}
