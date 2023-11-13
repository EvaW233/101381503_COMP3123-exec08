import React, { Component } from 'react';

export default class UserFormClass extends Component {
  constructor(props) {
    super(props);
    this.provinces = ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island'];
    this.state = {
      email: '',
      fullName: '',
      address: '',
      address2: '',
      city: '',
      province: 'Choose...',
      postalCode: '',
      agreeTerms: false,
    };
  }

  onValueChanged = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onCheckboxChange = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Data Entry Form</h1>
        <form onSubmit={(e) => this.onSubmitForm(e)}>
          <label>
            Email:
            <input
              name="email"
              type="text"
              onChange={(e) => this.onValueChanged(e)}
              placeholder="Enter Email"
            />
          </label>
          <br />
          <label>
            Full Name:
            <input
              name="fullName"
              type="text"
              onChange={(e) => this.onValueChanged(e)}
              placeholder="Enter Full Name"
            />
          </label>
          <br />
          <label>
            Address:
            <input
              name="address"
              type="text"
              value={this.state.address}
              placeholder="Enter Full Name"
              onChange={(e) => this.onValueChanged(e)}
            />
          </label>
          <br />
          
          <label>
            Agree to Terms & Conditions?
            <input
              name="agreeTerms"
              type="checkbox"
              onChange={(e) => this.onCheckboxChange(e)}
            />
          </label>
          <br />
          <input name="btnSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
