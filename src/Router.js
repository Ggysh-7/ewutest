import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'

export default function BaseRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}
