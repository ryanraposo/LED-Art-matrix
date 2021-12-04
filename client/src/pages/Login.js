//REACT IMPORTS
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//AUTH
import Auth from '../utils/auth';
import API from "../utils/ApiService";

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux';

//import actions for login formstate reducer
import {
  loginEmailChange,
  loginEmailCompleted,
  loginPasswordChange,
  loginPasswordCompleted
} from '../actions/login-form-actions';


const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //OBSERVE GLOBAL LOGIN FORM STATE
  const loginFormState = useSelector(state => state.loginForm)
  //console.log(loginFormState);
  //GRAB PIECE OF STATE
  const {
    email,
    //emailIsComplete,
    password,
    //passwordIsComplete
  } = loginFormState;

  //REDUX DISPATCH
  const dispatchREDUX = useDispatch();

  function handleChange(event) {
    if (event.target.type === 'email') {
      dispatchREDUX(loginEmailChange(event.target.value));
      dispatchREDUX(loginEmailCompleted(event.target.value));
    }
    if (event.target.type === 'password') {
      dispatchREDUX(loginPasswordChange(event.target.value));
      dispatchREDUX(loginPasswordCompleted(event.target.value));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      let booleanOrError;
      if (window.navigator.onLine) {
        booleanOrError = await API.login({ email, password });
        console.log("what is boolean or error on login", booleanOrError);
        switch(true) {
          case !booleanOrError || (booleanOrError instanceof Error): {
            setError(`${booleanOrError}`);
          }
          break;
          case booleanOrError === true: {
            setLoading(false);
            setError("");
          }
        }
        setLoading(false);
      } else {
        setError("\nInternet is disconnected, please try again later");
      }
    } catch(err) {
      setLoading(false);
      setError(err.message);
      console.log("error when logging in", err);
    }
  }

  return (
    <>
      <div
        className="form-container"
      >
        <form 
          onSubmit={handleSubmit}
          className="form-card"
        >
          <label
            htmlFor="email"
            className="form-email-label"
          >
            Email: 
          </label>
          <input
            required
            type="email"
            name="email"
            id="email-login"
            onChange={handleChange}
            placeholder="example@email.com"
            className="form-email-input"
            autoComplete="off"
          />
          <label
            htmlFor="password"
            className="form-password-label"
          >
            Password:
          </label>
          <input
            required 
            type="password"
            name="password"
            id="password-login"
            onChange={handleChange}
            placeholder="***************"
            className="form-password-input"
            autoComplete="off"
          />
          {//login error rendering
            error
            ?
            (
              <div
                style={{color: 'red'}}
              >
                {error}
              </div>
            )
            : null
          }
          <div
            className="form-button-container"
          >
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <Link 
                to="/forgotPassword"
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}
              >Forgot Password?</Link>
            </div>
            <button
              type="submit"
              disabled={false}
              className='form-btn'
            >
              Login
            </button>
            {
              loading 
              ?
              <>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <span>Loading...</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </>
              : null
            }
          </div>
        </form>
     </div>
  </>
  );
};

export default Login;