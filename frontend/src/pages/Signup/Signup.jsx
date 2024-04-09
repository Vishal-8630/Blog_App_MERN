import React, { useState } from "react";
import Styles from "./Signup.module.scss";

const Signup = () => {
  const [user, setUser] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({});
  }

  return (
    <div className={Styles.signup}>
      <h1 className={`${Styles.signup__heading}`}>Signup</h1>
      <form className={`${Styles.signup__form}`} onSubmit={handleFormSubmit}>
        <div className={`${Styles.signup__body}`}>
          <div className={`${Styles.signup__input}`}>
            <label htmlFor="name" className={`${Styles.signup__label}`}>
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className={`${Styles.signup__input}`}
              id="name"
              name="name"
              value={ user.name || "" }
              onChange={handleInputChange}
            />
          </div>
          <div className={`${Styles.signup__input}`}>
            <label htmlFor="email" className={`${Styles.signup__label}`}>
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className={`${Styles.signup__input}`}
              id="email"
              name="email"
              value={ user.email || "" }
              onChange={handleInputChange}
            />
          </div>
          <div className={`${Styles.signup__input}`}>
            <label htmlFor="password" className={`${Styles.signup__label}`}>
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className={`${Styles.signup__input}`}
              id="password"
              name="password"
              value={ user.password || "" }
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={`${Styles.signup__links}`}>
          <h5>Already a member?</h5>
          <a href="#">Signin</a>
        </div>
        <button className={`${Styles.signup__button}`}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
