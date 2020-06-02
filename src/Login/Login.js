import React, { useState } from "react";
import "./Login.css";
import bkg from "../assets/images/map.svg";
import logo from "../assets/images/logo.svg";
import waiting from "../assets/images/waiting.gif";
import { signin, authenticate, isAuth } from "../Services/Auth";
import { Redirect, useHistory, withRouter } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      return;
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  let emailReg = /^ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let passReg = /^\w{3,}$/;

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      return;
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const validate = () => {
    let errors = {};

    setIsEmail(emailReg.test(email));
    setIsPassword(passReg.test(password));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, submitting);

    setSubmitting(true);
    console.log("i got here", submitting);
    signin({ email, password })
      .then((res) => {
        authenticate(res.data);
        setSubmitting(false);
        history.push("/");
      })
      .catch((e) => {
        setSubmitting(false);
      });
  };
  return (
    <div className='login' style={{ backgroundImage: 'url("' + bkg + '")' }}>
      {isAuth() ? <Redirect to='/' /> : null}
      <div className='align'>
        <div className='grid align__item'>
          <div className='register'>
            <img src={logo} alt='Wejapa Logo' />
            <h2>Log in</h2>
            <form onSubmit={onSubmit} class='form'>
              <div className='form__field'>
                <input
                  type='email'
                  name='email'
                  placeholder='info@mailaddress.com'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>

              <div className='form__field'>
                <input
                  type='password'
                  name='password'
                  placeholder='enter password'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </div>

              <div className='form__field'>
                <button type='submit'>
                  {submitting ? (
                    <img src={waiting} alt='submitting icon' />
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
