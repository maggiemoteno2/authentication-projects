import React, { Component } from "react";
import LoggedInMessage from "./../LoggedInMessage";
import history from "./../../history/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { register } from "./../../redux/registeryForm/actions";

class registeryForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      password: "",
    };
  }

  userInformation = (firstName, password) => {
    console.log(firstName,password)
    this.props.register(firstName, password);
  };
  change = () => {
    history.push("/register");
  };
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
   
  };

  render() {
    const { firstName, password} = this.state;
    return (
      <div className="App-header">
        <i class="fa fa-user"></i>
        <div className="Log-in-form">
          <input
            type="text"
            onChange={this.handleChange}
            name="firstName"
            placeholder="firstName"
            required
          />
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            name="password"
            placeholder="password"
            required
          />

          <NavLink to={<LoggedInMessage />}>
            <div>
              <button
                className="log-in-button"
                onClick={() => this.userInformation(firstName, password)}
              >
                register
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userDetails: state.registeryForm.userDetails,
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (firstName, password) => {
      dispatch(register(firstName, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(registeryForm);
