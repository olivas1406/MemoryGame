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
    friends: friends,
    guessedFriends: friends ,
    score: 0,
    topScore: 0,
    message: "Click to begin"
  };

  shuffleArray = shuffle => {
    for (let i = shuffle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
}


  guessFriend = id => {
    // const guessed = this.state.guessed.filter()
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    const friends = this.state.guessedFriends.find(guessedFriends => guessedFriends.id === id);

      if(friends === undefined) {
        this.setState({
          friends: friends,
          guessedFriends: friends ,
          score: 0,
          topScore: 0,
          message: "You Lose!"
        })
      } else {
        const friendsLeft = this.state.friends.filter(guessedFriends => guessedFriends.id !== id)
          this.setState({
            guessedFriends: friends ,
            score: this.state.score +1,
          });
      }
    
    // this.setState({ friends });
    this.shuffleArray(friends)
  };




  render() {
    return (
      <div>
        <Navbar 
        message={this.state.message}
        />
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