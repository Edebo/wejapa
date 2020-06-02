import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className='notfound'>
      <div>
        <div className='mb-3'>
          <img src={logo}></img>
        </div>

        <Link to='/' className='text-center'>
          Go to site
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
