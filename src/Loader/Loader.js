import React from "react";
import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <div className='loader'>
      <Spinner animation='border' variant='success' />
    </div>
  );
};

export default Loader;
