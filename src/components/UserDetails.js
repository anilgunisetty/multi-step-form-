import React from "react";
import "./UserDetails.css";

const UserDetails = ({ nextStep, handleChange, values }) => {
  return (
    <div className="user-details-container">
      <div className="margin-container">
        <label className="label-text">Email</label>
        <input
          className="input-container"
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={handleChange("email")}
        />
      </div>

      <div className="margin-container">
        <label className="label-text">Username</label>
        <input
          className="input-container"
          type="text"
          placeholder="Username"
          value={values.username}
          onChange={handleChange("username")}
        />
      </div>

      <div className="margin-container">
        <label className="label-text">Password</label>
        <input
          className="input-container"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange("password")}
        />
      </div>

      <button className="button-container" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default UserDetails;
