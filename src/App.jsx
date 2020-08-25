import React, { Component } from 'react';
import MultiNumbers from './components/MultiNumbers';
import SingleNumber from './components/SingleNumber';
import './App.css';

class App extends Component {
  state = {
    luckyNumbersArray: [],
    singleNumber: null,
  };

  generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  generateLuckyNumbers = () => {
    this.setState({ singleNumber: this.generateRandomNumber(10) });
    const tempArray = [];
    let randomNumber = 0;
    for (let i = 0; i < 6; i++) {
      randomNumber = this.generateRandomNumber(49);

      if (tempArray.includes(randomNumber)) {
        console.log(tempArray, randomNumber);

        randomNumber = this.generateRandomNumber(49);
        i--;
      } else {
        tempArray.push(randomNumber);
      }
    }
    this.setState({ luckyNumbersArray: tempArray });
  };

  render() {
    return (
      <main>
        <h1>Lotto 6/49</h1>
        <h4>Generating lucky numbers</h4>
        <section>
          {this.state.luckyNumbersArray.map((num) => (
            <MultiNumbers key={num} multiNumber={num} />
          ))}

          {this.state.singleNumber !== null && (
            <SingleNumber singleNumber={this.state.singleNumber} />
          )}
        </section>
        <button
          onClick={() =>
            this.setState({ luckyNumbersArray: [], singleNumber: null })
          }
        >
          Reset
        </button>
        <button onClick={this.generateLuckyNumbers}>
          Show me the lucky numbers
        </button>
      </main>
    );
  }
}

export default App;
