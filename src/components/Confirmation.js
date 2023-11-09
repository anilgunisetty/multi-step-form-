import React from "react";
import "./Confirmation.css";

const Confirmation = ({ prevStep, nextStep, values }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <p className="result-message">Email: {values.email}</p>
      <p className="result-message">Username: {values.username}</p>
      <p className="result-message">First Name: {values.firstName}</p>
      <p className="result-message">Last Name: {values.lastName}</p>
      <p className="result-message">Country: {values.country}</p>
      <p className="result-message">
        Education Level: {values.levelOfEducation}
      </p>

      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Confirm</button>
    </div>
  );
};

export default Confirmation;
