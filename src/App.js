import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleReset = () => {
    this.setState({ count: 0 });
    document.getElementById("increment-btn").classList.remove("clicked");
    document.getElementById("decrement-btn").classList.remove("clicked");
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 5 }));
    document.getElementById("increment-btn").classList.add("clicked");
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 5 }));
    document.getElementById("decrement-btn").classList.add("clicked");
  document.getElementById("increment-btn").classList.remove("clicked");
  };

  render() {
    return (

      <div className="card__container">

      
      <div className="card">

        <h1 className="counter__heading">Simple Counter App</h1>
        <p className="counter-display">Counter - {this.state.count}</p>

        <div className="counter__buttons">
          <button
            className="counter__button"
            id="reset-btn"
            onClick={this.handleReset}
          >
            Reset
          </button>

          <button
            className="counter__button"
            id="increment-btn"
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          
          <button
            className="counter__button"
            id="decrement-btn"
            onClick={this.handleDecrement}
          >
            Decrement
          </button>

        </div>
      
      </div>
      
      </div>
    );
  }
}

export default Counter;