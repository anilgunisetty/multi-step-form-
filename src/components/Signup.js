import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class Signup extends Component {
  state = {
    step: 1,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    levelOfEducation: "",
  };

  // methods for navigation
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      levelOfEducation,
    } = this.state;
    const values = {
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      levelOfEducation,
    };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  }
}

export default Signup;
