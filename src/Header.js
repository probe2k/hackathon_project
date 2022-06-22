import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://dcassetcdn.com/design_img/2872455/626340/626340_15844793_2872455_7d6d3d99_image.png"
          alt="Alumni - X Logo"
        />
      </div>

      <div className="header__right">
        <HeaderOption title="Logout" onClick={logoutHandler} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
