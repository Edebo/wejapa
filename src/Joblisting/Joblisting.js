import React, { Component } from "react";
import { allJobs } from "../Services/Jobs";
import JobItem from "../JobItem/JobItem";

import "./Joblisting.css";
import Loader from "../Loader/Loader";

export class Joblisting extends Component {
  state = {
    loading: false,
    data: {},
  };

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs = async () => {
    this.setState({
      loading: true,
    });
    try {
      let res = await allJobs();

      this.setState({
        data: res.data.data,
        loading: false,
      });
    } catch (e) {}
  };
  render() {
    const { data, loading } = this.state;
    return (
      <div className='container mt-5'>
        <div className='row'>
          {loading ? (
            <Loader />
          ) : (
            data.jobs &&
            data.jobs.map((el, i) => {
              return <JobItem key={i} item={el} />;
            })
          )}
        </div>
      </div>
    );
  }
}

export default Joblisting;
