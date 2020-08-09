import React from "react";
import { Link } from "react-router-dom"
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Modal from 'react-modal';
import GoogleLogin from "react-google-login"
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import "../Styles/Header.css";

const Header = ({
  isAuthOpen, setAuthOpen, isAuthenticated, setAuthenticated,
  handleSearch, handleClose, handleLogout, searchText,
  setSearchText, profileImageUrl, setProfileImageUrl
}) => {

  const handleAuth = () => {
    setAuthOpen(true)
  }

  const customStyles = {
    content: {
      top: '19%',
      left: '90%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input onChange={e => setSearchText(e.target.value)} placeholder="Search" type="text" />
        <Link to={`/search/${searchText}`}>
          <SearchIcon className="header__inputButton" onClick={handleSearch} />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src={(isAuthenticated && profileImageUrl != null) ? profileImageUrl : ""}
          alt=""
          onClick={handleAuth}
        />
        <div className="login">
          <Modal
            isOpen={isAuthOpen}
            style={customStyles}
            ariaHideApp={false}
          >
            {!isAuthenticated
              ? <GoogleLogin
                clientId="603127536911-4kh9liof8ugn9m794eo0r9aj3753f2il.apps.googleusercontent.com"
                cookiePolicy={"single_host_origin"}
                onSuccess={handleClose}
                onFailure={response => console.log(response)}
              />
              : <button className="signout" onClick={handleLogout}>
                <ExitToAppOutlinedIcon className="signout__icon" />
                <h4>Sign out</h4>
              </button>
            }
          </Modal>
        </div>
      </div>
    </div >
  );
}

export default Header;
