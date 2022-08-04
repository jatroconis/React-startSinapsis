import React from 'react'
import { Link } from 'react-router-dom'
import './navigation-link.scss'

const NavigationLink = () => {
  return (
    <div className="content__navigation-link">
      <Link to='/test1'> Tesst1</Link>
      <Link to='/test2'> Test2</Link>
    </div>
  )
}   
export default NavigationLink