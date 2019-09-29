import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { DeleteButton } from "./components/DeleteButton";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      result: 0
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    // to calculate inputted numbers
    this.setState({ result: eval(this.state.input) });
  };

  render() {
    return (
      <div className="container-fluid mainContainer">
        <div className="row">
        <div className="col-6 left">
          <h1 style={{fontFamily:'Cabin', fontSize:'6em'}} className="animated slideInLeft">React.js_Calculator</h1>
            <h2 style={{fontFamily: 'Notable', fontSize:'3em'}} className="animated slideInLeft">UI Web Design</h2>
              <h3 style={{fontFamily: 'Bree Serif'}} className="animated slideInLeft">Tania Islam</h3>
          </div>
          <div className="col-6">
            <div className="app">
              <div style={{ borderRadius: '10px', padding: '20px', backgroundColor: '#888888' }}>
                <div>
                  <div className="calc-wrapper animated fadeInDown">
                    <Input input={this.state.input} result={this.state.result} />
                    <div className="calulatorRow">
                      <Button handleClick={this.addToInput}>7</Button>
                      <Button handleClick={this.addToInput}>8</Button>
                      <Button handleClick={this.addToInput}>9</Button>
                      <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="calulatorRow">
                      <Button handleClick={this.addToInput}>4</Button>
                      <Button handleClick={this.addToInput}>5</Button>
                      <Button handleClick={this.addToInput}>6</Button>
                      <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="calulatorRow">
                      <Button handleClick={this.addToInput}>1</Button>
                      <Button handleClick={this.addToInput}>2</Button>
                      <Button handleClick={this.addToInput}>3</Button>
                      <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="calulatorRow">
                      <Button handleClick={this.addToInput}>.</Button>
                      <Button handleClick={this.addToInput}>0</Button>
                      <Button handleClick={() => this.handleEqual()} style={{backgroundColor: '#7a2537'}} >=</Button>
                      <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="calulatorRow">
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
        </div>
      </div>
    );
  }
}

export default App;