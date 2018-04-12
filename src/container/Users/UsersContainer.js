import React, { Component } from 'react';
import Users from './Users';

class UsersContainer extends Component {
  constructor(){
    super();
    this.state = {
      allUsers: [],
      isLoading: false
    };
  }

  componentDidMount(){
    const userLink = "http://hp-api.herokuapp.com/api/characters";
    this.setState({ isLoading: true });
    fetch(userLink)
      .then((allUsers) => allUsers.json())
      .then((allUsers) => this.setState({ allUsers }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>{ (this.state.isLoading ? <h2> ✨ The Magic is Loading ✨ </h2> : <Users allUsers={this.state.allUsers} />)}</div>
    );
  }
}

export default UsersContainer;