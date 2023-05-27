import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import { MdDashboard, MdSettingsSystemDaydream } from 'react-icons/md';
import { FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import { FaTaxi, FaUserAlt } from 'react-icons/fa';
import { ImStatsBars2 } from 'react-icons/im';
import { IoIosNotifications } from 'react-icons/io';
import { SiLogstash } from 'react-icons/si';
import { AiFillSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import { DarkContext } from '../../context/backgroundColor/DarkBgProvider';
import { ACTION } from '../../context/backgroundColor/Reducer';

const Sidebar = () => {
  // Global state variable
  const {dispatch} = useContext(DarkContext);
  return (
    <nav className="sidebar">
      <div className="sidbar-logo">
        <NavLink to={'/'}>
          <span className="logo">LisaBooking</span>
        </NavLink>
      </div>
      <hr className="horizontal-line" />
      <div className="sidbar-lists">
        <ul className="list-items">
          <p className="sub-title"> Main </p>
          <li className="item">
            <MdDashboard className="sidebar-icon" />
            <span className="span-text"> Dashboard</span>
          </li>

          <p className="sub-title"> Lists </p>
          <NavLink to={'/users'}>
            <li className="item">
              <FaUserAlt className="sidebar-icon" />
              <span className="span-text"> Users </span>
            </li>
          </NavLink>

          <NavLink to={'/products'}>
            <li className="item">
              <FaProductHunt className="sidebar-icon" />
              <span className="span-text"> Products </span>
            </li>
          </NavLink>

          <li className="item">
            <FaShoppingCart className="sidebar-icon" />
            <span className="span-text"> Orders </span>
          </li>

          <li className="item">
            <FaTaxi className="sidebar-icon" />
            <span className="span-text"> Delivery </span>
          </li>
          <p className="sub-title"> Demonstration </p>
          <li className="item">
            <ImStatsBars2 className="sidebar-icon" />
            <span className="span-text"> Statistics </span>
          </li>

          <li className="item">
            <IoIosNotifications className="sidebar-icon" />
            <span className="span-text"> Notifications </span>
          </li>
          <p className="sub-title"> Services </p>
          <li className="item">
            <MdSettingsSystemDaydream className="sidebar-icon" />
            <span className="span-text"> System Health </span>
          </li>

          <li className="item">
            <SiLogstash className="sidebar-icon" />
            <span className="span-text"> Logs </span>
          </li>

          <li className="item">
            <AiFillSetting className="sidebar-icon" />
            <span className="span-text"> Settings </span>
          </li>
          <p className="sub-title"> User </p>
          <li className="item">
            <CgProfile className="sidebar-icon" />
            <span className="span-text"> Profile </span>
          </li>

          <li className="item">
            <AiOutlineLogout className="sidebar-icon" />
            <span className="span-text"> Logout </span>
          </li>
        </ul>
      </div>
      <div className="color-options">
        <div
          className="color-option"
          onClick={() => dispatch({ type: ACTION.LIGHT })}
        ></div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: ACTION.DARK })}
        ></div>
      </div>
    </nav>
  );
};

export default Sidebar;