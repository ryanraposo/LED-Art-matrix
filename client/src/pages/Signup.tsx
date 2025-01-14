import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../utils/ApiService";
import {
  signupUsernameChange,
  signupEmailChange,
  signupPasswordChange,
} from "../actions/signup-form-actions";
import { Spinner } from "../components/Spinner";
import { MyRootState } from "../types";
import { useHistory } from "react-router-dom";
import { login } from "../actions/logged-in-actions";
 
const Signup: React.FC = (): JSX.Element => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { username, email, password } = useSelector((state: MyRootState) => state.signupFormState);
  const dispatch = useDispatch();
  
  async function handleSubmit(event: any): Promise<void> {
    event.preventDefault();
    setLoading(true);
    try {
      if (window.navigator.onLine) {
        await API.signup({ username, email, password });
        dispatch(login());
        setLoading(false);
        history.push("/");
      } else {
        setError("\nInternet is disconnected, please try again later");
      }
    } catch (err) {
      setLoading(false);
      const error = err as Error;
      setError(error.message);
    }
  } 

  function handleChange(event: any): void {
    if (event.target.type === "text") {
      dispatch(signupUsernameChange(event.target.value));
    }
    if (event.target.type === "email") {
      dispatch(signupEmailChange(event.target.value));
    }
    if (event.target.type === "password") {
      dispatch(signupPasswordChange(event.target.value));
    }
  }

  return (
    <>
      <div
        className="form-container"
      >
        <form 
          className="form-card"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="username"
            className="form-username-label"
          >
            Username:
          </label>
          <input
            required 
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="my_username"
            className="form-username-input"
            autoComplete="off"
          />
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
            className="form-password-input"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="***************"
            autoComplete="off"
          />
          {
          error 
          ? (
            <>
              <div
                style={{ color: "red" }}
              >
                An error happened during the signup process!
                {error}
              </div>
            </>
          )
          : null
        }
          <div
            className="form-button-container"
          >
            <button
              type="submit"
              name="signup-button"
              disabled={false}
              className="form-btn"
            >
              Sign Up
            </button>
            {
          loading 
          ? <Spinner />
          : null
        }
          </div> 
        </form>
      </div>
    </>
  );
};

export default Signup;
