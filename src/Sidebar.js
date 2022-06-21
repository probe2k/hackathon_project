import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://wallpaperaccess.com/full/449895.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <p>Welcome {user.displayName}</p>
      </div>
    </div>
  );
};

export default Sidebar;
