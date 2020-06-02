import React from "react";
import Joblisting from "../Joblisting/Joblisting";
import Header from "../Header/Header";

import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Header />
      <div className='rest'>
        <Joblisting />
      </div>
    </div>
  );
};

export default Dashboard;
