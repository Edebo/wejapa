import React from "react";
import Header from "../Header/Header";
import { isAuth } from "../Services/Auth";
import avatar from "../assets/images/avatar.jpeg";
import "./Profile.css";

const Profile = () => {
  const developer = isAuth().developer;
  return (
    <div>
      <Header />
      <div className='rest'>
        <div className='profile '>
          <div className='left-profile pt-4 p-2 mt-4'>
            <div className='avatar'>
              <img src={avatar} alt='avatar' />
            </div>
            <div className='left-flex mt-4'>
              <p>Name:</p>
              <p>{developer.name}</p>
            </div>
            <div className='left-flex'>
              <p>Email:</p>
              <p>{developer.email}</p>
            </div>
            <div className='left-flex'>
              <p>Phone:</p>
              <p></p>
            </div>
            <div className='left-flex'>
              <p>Github:</p>
              <a target='_blank' href={developer.github}>
                {developer.github}
              </a>
            </div>
            <div className='left-flex'>
              <p>Resume:</p>
              <a target='_blank' href={developer.resume}>
                {developer.resume}
              </a>
            </div>
            <div className='left-flex'>
              <p>Stackoverflow:</p>
              <a target='_blank' href={developer.stackoverflow}>
                {developer.stackoverflow}
              </a>
            </div>
            <button className='btn btn-success'>Edit Profile</button>
          </div>
          <div className='right-profile mt-4 ml-3 pl-3 pt-3'>
            <p>You havent applied to any job yet</p>
            {/* <div className='row'>
              <div className='col-md-4 cd'>
                <h3></h3>
                <p></p>
              </div>
              <div className='col-md-4 cd'>
                <h3></h3>
                <p></p>
              </div>
              <div className='col-md-4 cd'>
                <h3></h3>
                <p></p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
