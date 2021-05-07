import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/cleevio-logo.png';
import vector from '../../assets/Vector.png';
import clocks from '../../assets/Clock.png';
import future from '../../assets/Future.png';
import globus from '../../assets/Globus.png';
import '../../styles/Navbar.css';

const NavbarTrips = () => (
  <div className="navbarTrips">
    <div className="logo">
      <img alt="logo" src={logo} />
    </div>
    <NavLink to="/newtrip">
      <div className="btnCreateTrip">
        <h5>New Trip</h5>
        <img alt="vector" src={vector} />
      </div>
    </NavLink>
    <div className="sectionsBlock">
      <NavLink to="/yourtrips">
        <div>
          <img alt="clocks" src={clocks} />
          <p>Your Trips</p>
        </div>
      </NavLink>
      <div>
        <img alt="future" src={future} />
        <p>Future features</p>
      </div>
      <div>
        <img alt="globus" src={globus} />
        <p>Future section</p>
      </div>
    </div>
  </div>
);

export default NavbarTrips;
