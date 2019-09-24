

import './App.css';
import React, { Component } from "react";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { ClearButton } from "./Components/ClearButton";
import  * as math from "mathjs";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
   this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
          <ClearButton handleClear={() => this.setState({ input: "0" })}>AC</ClearButton>
          <Button handleClick={this.addToInput}>+/-</Button>
          <Button handleClick={this.addToInput}>%</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button className="equal" handleClick={() => this.handleEqual()}>=</Button>
          </div>
        
          </div>
      </div>
    );
  }
}
export default App;
