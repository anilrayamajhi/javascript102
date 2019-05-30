import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(null);

  return (
    <div className="App">
      <div>
        <input id="input1" type="text" onChange={e => { setValue(e.target.value * 2); }} />
      </div>
      <div>
        2x Result: <span id="result">{value}</span>
      </div>
    </div>
  );
}

export default App;
