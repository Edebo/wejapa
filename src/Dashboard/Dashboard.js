import React, { Suspense } from "react";
import "./Dashboard.css";
import Loader from "../Loader/Loader";
const Joblisting = React.lazy(() => import("../Joblisting/Joblisting"));
const Header = React.lazy(() => import("../Header/Header"));

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Suspense fallback={<Loader />}>
        <Header />
        <div className='rest'>
          <Joblisting />
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
