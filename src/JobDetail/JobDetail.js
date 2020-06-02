import React, { Suspense, Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { getJob } from "../Services/Jobs";
import logo from "../assets/images/logo.png";
import back from "../assets/images/back.svg";
import "./JobDetail.css";
import Loader from "../Loader/Loader";
const Header = React.lazy(() => import("../Header/Header"));

export class JobDetail extends Component {
  state = {
    loading: false,
    data: {},
    benefits: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.fetchJobs();
  }

  fetchJobs = async () => {
    this.setState({
      loading: true,
    });
    try {
      let res = await getJob(this.props.match.params.id);
      console.log(res.data.data);
      this.setState({
        data: res.data.data,
        loading: false,
        benefits: res.data.data.benefits,
      });
    } catch (e) {}
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const { loading, data } = this.state;

    return (
      <div>
        <Suspense fallback={<Loader />}>
          <Header />
          {loading ? (
            <div className='my-5 text-center'>
              <Loader />
            </div>
          ) : (
            <div className='rest'>
              <div className='card mt-5'>
                <div className='top ml-3'>
                  <div className='back mt-3 '>
                    <Link to='/'>
                      {/* <img src={back} alt /> */}
                      Back to all Jobs
                    </Link>
                  </div>

                  <div className='logo-back'>
                    <img src={logo} className='photo' />
                  </div>
                </div>
                <div className='description'>
                  <h2>
                    {data.title} -{" "}
                    <span
                      className={
                        data.status === "Closed"
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {data.status}
                    </span>
                  </h2>
                  <div className='d-flex mt-2'>
                    <h4 className='badge badge-pill badge-warning p-2 mr-1'>
                      {data.experience}
                    </h4>
                    <h4 className='badge badge-pill badge-warning p-2 mr-1'>
                      {data.type}
                    </h4>
                    <h4 className='badge badge-pill badge-warning p-2 mr-1'>
                      {data.location}
                    </h4>
                    <h4 className='badge badge-pill badge-success p-2 mr-1 text-white salary'>
                      ${data.salary}/month
                    </h4>
                  </div>

                  <div className='mt-4'>
                    <h2>Description</h2>
                    <p>{data.description}</p>
                  </div>

                  <div className='ml-2 mt-4'>
                    <h2>Benefits</h2>
                    <ul>
                      {data.benefits &&
                        data.benefits.map((el, i) => {
                          return (
                            <li key={i}>
                              <p>{el}</p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <button disabled={data.status === "Closed" ? true : false}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </Suspense>
      </div>
    );
  }
}

export default withRouter(JobDetail);
