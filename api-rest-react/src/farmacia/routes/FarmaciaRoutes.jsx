import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Clientes } from '../pages/Clientes'
import { Farmacia } from '../pages/Farmacia'
import { Home } from '../pages/Home'
import { Pedido } from '../pages/Pedido'
import { Perfil } from '../pages/Perfil'
import { Personal } from '../pages/Personal'
import { Producto } from '../pages/Producto'

export const FarmaciaRoutes = () => {
  return (
    <>
        <div className='flex bg-gray-900'>
            <NavBar />
            <div className="container mx-auto px-7 py-10 ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/personal" element={<Personal />} />
                    <Route path="/farmacia" element={<Farmacia />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/producto" element={<Producto />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/pedido" element={<Pedido />} />
                    {/* <Route path="/*" element={<Navigate to="/" />} /> */}
                </Routes>
            </div>
        </div>
    </>
  )
}
