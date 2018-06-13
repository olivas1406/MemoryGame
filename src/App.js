import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./components/Cards";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";



import friends from "./friends.json";




class App extends Component {

  state = {
    friends
  };

  removeFriend = id => {
      const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <Title>Clickey Game</Title>
        {this.state.friends.map(friend => (
          <Cards
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
