import React from "react";
import "./JobItem.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import moment from "moment";

moment.locale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "seconds",
    ss: "%ss",
    m: "a minute",
    mm: "%dm",
    h: "an hour",
    hh: "%dh",
    d: "a day",
    dd: "%dd",
    M: "a month",
    MM: "%dM",
    y: "a year",
    yy: "%dY",
  },
});
const JobItem = ({ item }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div
      className='col-lg-4 col-md-6 col-sm-6 job mb-2 mx-1 item'
      style={{ height: "260px" }}
    >
      <Link to={`/jobs/${item._id}`}>
        <div className='logo'>
          <img src={logo} alt='Wejapa Logo' />
        </div>

        <div className='py-3'>
          <div className='para'>
            <h6>{item.title}</h6>

            <p
              className={
                item.status === "Closed" ? "text-danger" : "text-success"
              }
            >
              {item.status}
            </p>
          </div>
          <div className='para'>
            <p className='gray'>{item.type}</p>

            <p className='text-warning'>{item.location}</p>
          </div>
          <div className='para'>
            <p className='gray'>{item.experience}</p>

            <p className='text-success'>${numberWithCommas(item.salary)}</p>
          </div>
          <div className='para'>
            <p className='gray'></p>

            <p className=''>{moment(item.createdAt, "YYYY-MM-DD").fromNow()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default JobItem;
