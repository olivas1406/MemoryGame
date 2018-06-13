import React, { Component } from 'react';
import './App.css';
import Cards from "./components/Cards";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

import friends from "./friends.json";




class App extends Component {

  state = {
    friends
  };


  ///////    NEED TO CHANGE THIS TO TRACK GUESSES  //////////
  // removeFriend = id => {
  //     const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
  // };
     
           



  render() {
    return (
      <div>
    <Navbar />
    <Header />
      <Container>
        <Wrapper>
          {/* <Title>Characters</Title> */}
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
      </Container>
      <Footer />
      </div>
    );
  }
}

export default App;
