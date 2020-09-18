import React, { Component } from "react";
// import "./CSS/todo.css";
import axios from 'axios';
import { v4 as uuid } from "uuid";

const automate = async() => {
    const response = await axios.get('http://localhost:5000/screenshot')

}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: "",
      fatherName: "",
      email: "",
      jobTitle: "",
      address: "",
      gender: "",
      contact: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.name} Registered Successfully !!!!`);
    let {
      name,
      fatherName,
      email,
      address,
      jobTitle,
      gender,
      contact,
      data
    } = this.state;

    const item = {
      id: uuid(),
      name: name,
      fatherName: fatherName,
      email: email,
      address: address,
      jobTitle: jobTitle,
      gender: gender,
      contact: contact
    };
    this.setState({
      data: [...data, item]
    });

  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h1>Candidate Registration</h1>
            <label>Name :</label>{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="FirstName..."
            />
            <br />
            <label>Father Name :</label>{" "}
            <input
              type="text"
              name="fatherName"
              value={this.state.fatherName}
              onChange={this.handleChange}
              placeholder="Father Name..."
            />
            <br />
            <label>Email :</label>{" "}
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email..."
            />
            <br />
            <label>Job Title :</label>{" "}
            <input
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
              onChange={this.handleChange}
              placeholder="Job Title..."
            />
            <br />
            <label>Contact</label>{" "}
            <input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleChange}
              placeholder="Contact"
            />
            <br />
            <label>Address :</label>{" "}
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Address..."
            />
            <br />
            <label>Gender :</label>
            <select
              name="gender"
              onChange={this.handleChange}
              defaultValue="Select Gender"
            >
              <option defaultValue>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            {/* <input type="submit" value="Submit" /> */}
            {/* <button onClick={automate}>Automate</button> */}
            <input type="submit" onClick={automate} value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}




export default Form;
