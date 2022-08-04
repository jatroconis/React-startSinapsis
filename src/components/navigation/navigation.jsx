import React from 'react'
import './navigation.scss'
import { Outlet } from 'react-router-dom'

//-- COMPONENTES --//
import ProfileNavigation from '../profile-navigation/profile-navigation'
import NavigationLink from '../navigation-link/navigation-link'


const Navigation = () => {

  return (
    <div className="main__container">
        <div className='navigation__container'>
          <div className="navigation__container__profile">
            <ProfileNavigation/>
          </div>
          <hr/>
          <div className="navigation__container__links">
            {/* <Link to='/test1'> Test1</Link>
            <Link to='/test2'> Test2</Link> */}
            <NavigationLink/>
          </div>
        </div>
        <div className="content__container">
            <Outlet/>  
        </div>
    </div>

  )
}

export default Navigation