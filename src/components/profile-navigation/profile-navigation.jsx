import React, { useEffect, useState } from "react";
import "./profile-navigation.scss";
import ProfileIMG from "../../assets/images/profile_image.jpg";

const ProfileNavigation = () => {
  const [nameUser, setNameUser] = useState("");
  useEffect(() => getUser());
  const getUser = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setNameUser(user.displayName);
  };
  return (
    <div className="content__profile-Navigation">
        <div className="content__profile-Navigation__profile-image">
            <img src={ProfileIMG} alt="image" />
        </div>
        <div className="content__profile-Navigation__profile-data">
            <h3>{"JUAN TROCONIS"}</h3>
            <p>Administrador</p>
        </div>
    </div>
  )
}
export default ProfileNavigation;
