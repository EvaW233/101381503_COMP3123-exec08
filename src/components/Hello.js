import React, { Component } from 'react';

export default class Hello extends Component {
  constructor(props) {
    super(props);
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
    console.log("Submitted:", this.state);
    alert(
      `Email: ${this.state.email}\nFull Name: ${this.state.fullName}\nAddress: ${this.state.address}\nCity: ${this.state.city}\nProvince: ${this.state.province}\nPostal Code: ${this.state.postalCode}`
    );
  };

  render() {
    return (
      <div className="green-box">
        <h1>Data Entry Form</h1>
        <form onSubmit={(e) => this.onSubmitForm(e)}>
          <div className="form-row">
            <div className="form-column">
              <label>
                Email:
                <input
                  name="email"
                  type="text"
                  onChange={(e) => this.onValueChanged(e)}
                  placeholder="Enter Email"
                />
              </label>
              <label>
                Address:
                <input
                 name="address"
                 type="text"
                 placeholder="1234 Main St"
                 value={this.state.address}
                 onChange={(e) => this.onValueChanged(e)}
  />
              </label>
              <label>
                City:
                <input
                  name="city"
                  type="text"
                  onChange={(e) => this.onValueChanged(e)}
                />
              </label>
            </div>
            <div className="form-column">
              <label>
                Full Name:
                <input
                  name="fullName"
                  type="text"
                  onChange={(e) => this.onValueChanged(e)}
                  placeholder="Enter Full Name"
                />
              </label>
              <label>
                Address 2:
                <input
                  name="address2"
                  type="text"
                  placeholder="Apartment, studio, or floor"
                  value={this.state.address2}
                  onChange={(e) => this.onValueChanged(e)}
                />
              </label>
              <label>
                Province:
                <select
                  name="province"
                  onChange={(e) => this.onValueChanged(e)}
                >
                  <option value="Choose...">Choose...</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Quebec">Quebec</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Alberta">Alberta</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="Saskatchewan">Saskatchewan</option>
                  <option value="Nova Scotia">Nova Scotia</option>
                  <option value="New Brunswick">New Brunswick</option>
                  <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                  <option value="Prince Edward Island">Prince Edward Island</option>


                  
                </select>
              </label>
            </div>
          </div>
          <div className="form-row">
            <label>
              Postal Code:
              <input
                name="postalCode"
                type="text"
                onChange={(e) => this.onValueChanged(e)}
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Agree to Terms & Conditions?
              <input
                name="agreeTerms"
                type="checkbox"
                onChange={(e) => this.onCheckboxChange(e)}
              />
            </label>
          </div>
          <div className="form-row">
            <input
              name="btnSubmit"
              type="submit"
              value="Submit"
              onClick={(e) => this.onSubmitForm(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}
