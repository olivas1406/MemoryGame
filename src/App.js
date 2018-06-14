import React, { Component } from 'react';
import Cards from "./components/Cards";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import './App.css';


import friends from "./friends.json";


class App extends Component {
  state = {
    friends
  };

  guessFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
      this.setState({ friends });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
          <Wrapper>
            {this.state.friends.map(friend => (
              <Cards
                guessFriend={this.guessFriend}
                id={friend.id}
                image={friend.image}
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