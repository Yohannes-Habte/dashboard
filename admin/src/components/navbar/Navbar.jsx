import React, { useContext } from 'react';
import './Navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { MdLanguage, MdMessage } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';
import { VscColorMode } from 'react-icons/vsc';
import { DarkContext } from '../../context/backgroundColor/DarkBgProvider';
import { ACTION } from '../../context/backgroundColor/Reducer';


const Navbar = () => {
  // Global state variable
  const { dispatch } = useContext(DarkContext);

  // Change background color using toggle
  const changeBackground = () => {
    dispatch({ type: ACTION.TOGGLE });
  };
  return (
    <nav className="navbar">
      <div className="wrapper">
        {/* Search container */}
        <div className="search">
          <input type="text" placeholder="Search..." className="navbar-input" />
          <FaSearch className="search-icon" />
        </div>

        {/* Items container */}
        <div className="items">
          <div className="item">
            <MdLanguage className="navbar-icon" />
          </div>

          <div className="item">
            <VscColorMode className="navbar-icon" onClick={changeBackground} />
          </div>

          <div className="item">
            <IoMdNotifications className="navbar-icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <MdMessage className="navbar-icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="Profile"
              className="navbar-profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
