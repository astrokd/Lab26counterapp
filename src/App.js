import React from "react";
import "./app.scss";

import Header from "./Header";
import Footer from "./Footer";

let fizzyBuzz = value => {
  let result = "";
  if (value % 15 === 0) {
    result = "FizzBuzz";
  } else if (value % 3 === 0) {
    result = "Fizz";
  } else if (value % 5 === 0) {
    result = "Buzz";
  } else {
    return value;
  }
  return result;
};

// https://upmostly.com/tutorials/changing-the-background-color-in-react

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      fizzbuzz: "_",
      btColor: ""
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <div
            className="App"
            style={{
              backgroundColor: this.state.count % 2 ? "green" : "grey"
            }}
          >
            <h1>Hello CodeSandbox</h1>
            <h2>Start clicking to see some magic happen!</h2>
            <div class="count">
              Current count: <span id="number">{this.state.count}</span>
              FizzBuzz State: <span id="fizz">{this.state.fizzbuzz}</span>
              <div
                className="button"
                id="increment"
                onClick={() =>
                  this.setState({
                    count: this.state.count + 1,
                    fizzbuzz: fizzyBuzz(this.state.count + 1)
                  })
                }
              >
                Increment
              </div>
              <div
                className="button"
                id="decrement"
                onClick={() =>
                  this.setState({
                    count: this.state.count - 1,
                    fizzbuzz: fizzyBuzz(this.state.count - 1)
                  })
                }
              >
                Decrement
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
