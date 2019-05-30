import React from "react";

class App extends React.Component {
  state = {
    value: null,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value * 2,
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <input id="input1" type="text" onChange={this.handleChange} />
        </div>
        <div>
          2x Result: <span id="result">{this.state.value}</span>
        </div>
      </div>
    );
  }
}

export default App;
