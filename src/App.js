import React from "react";
import Components from "./components";

function App() {
  return (
    <div className="App">
    <Components />
      <div>
        <input id="input1" type="text" />
      </div>
      <div>
        2x Result: <span id="result" />
      </div>
    </div>
  );
}

export default App;
