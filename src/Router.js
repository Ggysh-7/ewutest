import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Forget from './pages/login/Forget'

export default function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
      </Routes>
    </BrowserRouter>
  )
}
