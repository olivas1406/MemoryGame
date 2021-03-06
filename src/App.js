import React, { Component } from 'react';
import Cards from "./components/Cards";
import Header from "./components/Header"
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
    daedra,
    guesses,
    bestScore,
    message
  };

  guessedDaedra = id => {   
    const daedraArr = this.state.daedraArr;
    const daedraMatch = daedra.filter(match => match.id === id);
      if (daedraMatch[0].clicked){
        guesses = 0;
        message = "You Lose! Click any image to play again!"

        for (let i = 0 ; i < daedra.length ; i++){
            daedra[i].clicked = false;
        }

        this.setState({message});
        this.setState({guesses});
        this.setState({daedraArr});
      } else if (guesses < 11) {
          daedraMatch[0].clicked = true;
          guesses++;
          message = "Good Guess!";
          
          if (guesses > bestScore){
            bestScore = guesses;
            this.setState({ bestScore });
          }
          daedra.sort(function(a, b){return 0.5 - Math.random()});
          this.setState({daedraArr});
          this.setState({guesses});
          this.setState({message});
      } else {
        daedraMatch[0].clicked = true;
        guesses = 0;
        message = "You Win!!! Try Again";
        bestScore = 12;
        this.setState({bestScore});
    
        for (let i = 0 ; i < daedraArr.length ; i++){
            daedraArr[i].clicked = false;
        }
        daedraArr.sort(function(a, b){return 0.5 - Math.random()});
        this.setState({daedraArr});
        this.setState({guesses});
        this.setState({message});
      }
  };

  render() {
    return (
      <div>
        <Navbar>
          <div className="col-6 navText">
            <h3>{this.state.message}</h3>
          </div>
          <div className="col-6 navText">
            <h3>Score: {this.state.guesses} | Top Score: {this.state.bestScore}</h3>
          </div>
        </Navbar>
        <Header>Daedric Prince Click Game</Header>
          <Container>
            {this.state.daedra.map(match => (
              <Cards
                guessedDaedra={this.guessedDaedra}
                id={match.id}
                key={match.id}
                image={match.image}
              />      
            ))}
            </Container>
            <Footer />
      </div>
    );
  }
}

export default App;