import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../farmacia/components/NavBar'
import { LoginPage } from '../pages/LoginPage'


export const AuthRoutes = () => {
  return (
    <>  
        <Routes >
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/prueba" element={<NavBar/>}/>
            <Route path="/*" element={<Navigate to="/auth/login"/>}/>
        </Routes>
    </>
  )
}
