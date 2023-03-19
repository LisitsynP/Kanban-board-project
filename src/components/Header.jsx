import { React, useState } from "react";
import userPhoto from "../img/userphoto.svg";
import arrowDown from "../img/arrowDown.svg";
import arrowUp from "../img/arrowUp.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header-conteiner">
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Awesome Kanban Board</h2>
        </Link>
        <div
          className="profile-conteiner"
          onClick={(e) => setIsActive(!isActive)}
        >
          <div className="profile">
            <img alt="userPhoto" src={userPhoto} className="prfile-photo" />
          </div>
          <img
            alt="arrowDown"
            src={arrowDown}
            className="profile-arrow down"
            style={{ display: `${isActive ? "none" : "block"}` }}
          />
          <img
            alt="arrowUp"
            src={arrowUp}
            className="profile-arrow up"
            style={{ display: `${isActive ? "block" : "none"}` }}
          />
          {isActive && (
            <>
              <div className="profile-dropdown-say"></div>
              <ul className="profile-dropdown">
                <li className="profile-dropdown-item">Profile</li>
                <li className="profile-dropdown-item">Log Out</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
