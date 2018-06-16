import React, { Component } from 'react';
import Cards from "./components/Cards";
import Header from "./components/Header"
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import daedra from "./daedra.json";
import './App.css';

let guesses = 0;
let bestScore = 0;
let message = "Click on a Daedric Prince to start!"

class App extends Component {
  state = {
    daedra: daedra,
    pickedDaedra: daedra ,
    score: 0,
    topScore: 0,
    message: "Click a Daedric Prince to begin"
  };

  shuffleArray = shuffle => {
    for (let i = shuffle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
}

  pickedFriends = id => {
    const findFriend = this.state.pickedFriends.find(id => id.id === id);

    if(findFriend === undefined) {
      
        this.setState({ 
         
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            score: 0,
            friends: friends,
            pickedFriends: friends
        });
    }
    else {
   
        const newFriends = this.state.pickedFriends.filter(id => id.id !== id);
        
        this.setState({ 
       
            score: this.state.score + 1,
            friends: friends,
            pickedFriends: newFriends
        });
    }

    this.shuffleArray(friends);
};

render() {
    return (

    <div>
       <Navbar />
        <Header 
        
        />
        
        <Container>
          <Wrapper>
            {this.state.friends.map(friend => (
              <Cards
                pickedFriends={this.pickedFriends}
                id={friend.id}
                image={friend.image}
              />
            ))}
          </Wrapper>
        </Container>
        <Footer />
      </div>

          )
        }
}

export default App;