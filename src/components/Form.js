import React, { Component } from "react";
import "../App.css";
export default class extends Component {
  state = { name: "", phone: "", date_of_birth: "", roles: "" };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <section className="Boiler">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="form-width"
              onChange={this.handleChange}
            />
            <br />

            <label htmlFor="phone" className="label">
              Date Of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              placeholder="Enter your DOB"
              className="form-width"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <div className="form-width" style={{ display: "flex" }}>
              <input value="+977" disabled style={{ width: "30px" }} />
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone no."
                style={{ width: "162px" }}
                onChange={this.handleChange}
              />
            </div>
            <br />

            <label htmlFor="role" className="label">
              Role
            </label>
            <br />
            <select name="roles" className="roles" onChange={this.handleChange}>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="visitor">Visitor</option>
            </select>
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }
}
