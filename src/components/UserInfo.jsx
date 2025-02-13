import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Piseth San',
      profession: 'Software Developer'
    };
  }

  render() {
    const luckyNumber = Math.floor(Math.random() * 100) + 1;

    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Name: {this.state.name}</h2>
        <h3>Profession: {this.state.profession}</h3>
        <p>Your lucky number is {luckyNumber}</p>
      </div>
    );
  }
}

export default UserInfo;