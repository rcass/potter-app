import React, { Component } from 'react';
import House from './House';

class HouseContainer extends Component {
  constructor(){
    super();
    this.state = {
      allHouses: [],
      isLoading: false
    };
  }

  componentDidMount(){
    const houseLink = "http://hp-api.herokuapp.com/api/characters/house/gryffindor";
    this.setState({ isLoading: true });
    fetch(houseLink)
      .then((allHouses) => allHouses.json())
      .then((allHouses) => this.setState({ allHouses }))
      .then(() => this.setState({ isLoading: false }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>{
        (this.state.isLoading ? <h2> ✨ The Magic is Loading ✨ </h2> : <House allHouses={this.state.allHouses} />)
      }
      </div>
    );
  }
}

export default HouseContainer;