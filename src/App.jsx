import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { DeleteButton } from "./components/DeleteButton";


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
    // to calculate inputted numbers
    this.setState({ input: eval(this.state.input) });
  };

  render() {
    return (
      <div className="container">
        <div className="image"></div> 
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="app">
              <div className="calc-wrapper">
                <Input input={this.state.input} />
                <div className="row">
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.addToInput}>/</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button handleClick={this.addToInput}>*</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.addToInput}>+</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>.</Button>
                  <Button handleClick={this.addToInput}>0</Button>
                  <Button handleClick={() => this.handleEqual()}>=</Button>
                  <Button handleClick={this.addToInput}>-</Button>
                </div>
                <div className="row">
                  <DeleteButton
                    handleClear={() => this.setState({ input: "" })}
                  >
                    Clear
            </DeleteButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;