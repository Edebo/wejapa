import React, { useState } from "react";
import "./Login.css";
import bkg from "../assets/images/map.svg";
import logo from "../assets/images/logo.svg";
import waiting from "../assets/images/waiting.gif";
import { signin, authenticate } from "../Services/Auth";
import { Redirect, useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      return;
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

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
    let emailReg = /^ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passReg = /^\w{3,}$/;
    setIsEmail(emailReg.test(email));
    setIsPassword(passReg.test(password));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, submitting);
    // validate();
    // if (!isEmail || !isPassword) {
    //   return;
    // }

    setSubmitting(true);
    console.log("i got here", submitting);
    signin({ email, password })
      .then((res) => {
        setSubmitting(false);
        history.push("/");
      })
      .catch((e) => {});
  };
  return (
    <div className='login' style={{ backgroundImage: 'url("' + bkg + '")' }}>
      <div className='align'>
        <div class='grid align__item'>
          <div class='register'>
            <img src={logo} alt='Wejapa Logo' />
            <h2>Log in</h2>
            <form onSubmit={onSubmit} class='form'>
              <div class='form__field'>
                <input
                  type='email'
                  name='email'
                  placeholder='info@mailaddress.com'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>

              <div class='form__field'>
                <input
                  type='password'
                  name='password'
                  placeholder='enter password'
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>

              <div class='form__field'>
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
