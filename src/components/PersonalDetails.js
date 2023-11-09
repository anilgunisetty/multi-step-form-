import React from "react";
import "./PersonalDetails.css";

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {
  return (
    <div className="user-details-container">
      <div className="margin-container">
        <label className="label-text">First Name</label>
        <input
          className="input-container"
          type="text"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange("firstName")}
        />
      </div>

      <div className="margin-container">
        <label className="label-text">Last Name</label>
        <input
          className="input-container"
          type="text"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange("lastName")}
        />
      </div>

      <div className="margin-container">
        <label className="label-text">Country</label>
        <input
          className="input-container"
          type="text"
          placeholder="Country"
          value={values.country}
          onChange={handleChange("country")}
        />
      </div>

      <div className="margin-container">
        <label className="label-text">Level of Education</label>
        <input
          className="input-container"
          type="text"
          placeholder="Education Level"
          value={values.levelOfEducation}
          onChange={handleChange("levelOfEducation")}
        />
      </div>
      <div className="button-container">
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default PersonalDetails;
