import React from 'react'
import { Link } from 'react-router-dom'
import './navigation-link.scss'

const NavigationLink = () => {
  return (
    <div className="content__navigation-link">
      <Link to='/users'> Usuarios</Link>
      <Link to='/test2'> Proveedores</Link>
      <Link to='/test2'> Productos</Link>
      <Link to='/test2'> Clientes</Link>
      <Link to='/test2'> Cotizaciones</Link>
      <Link to='/test2'> Ordenes de compra</Link>
      <Link to='/test2'> Facturas</Link>
    </div>
  )
}   
export default NavigationLink