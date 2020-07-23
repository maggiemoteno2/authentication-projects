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
      email:""
    };
  }

  userInformation = (firstName, password,email) => {
    this.props.register(firstName, password,email);
  };
  change = () => {
    history.push("/register");
  };
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
   
  };

  render() {
    const { firstName, password,email} = this.state;
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
          <br/>
           <input
            type="text"
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            required
          />

          <NavLink to={<LoggedInMessage />}>
            <div>
              <button
                className="log-in-button"
                onClick={() => this.userInformation(firstName, password,email)}
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
    register: (firstName, password,email) => {
      dispatch(register(firstName, password,email));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(registeryForm);
