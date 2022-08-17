import React from 'react'
import './profile-navigation.scss'
import ProfileIMG from '../../assets/images/profile_image.jpg'

const ProfileNavigation = () => {
  return (
    <div className="content__profile-Navigation">
        <div className="content__profile-Navigation__profile-image">
            <img src={ProfileIMG} alt="image" />
        </div>
        <div className="content__profile-Navigation__profile-data">
            <h4>{"JUAN TROCONIS"}</h4>
            <p>Administrador</p>
        </div>
    </div>
  )
}

export default ProfileNavigation