import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css"

function App() {

  // State to store count value
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with decremented value
    setCount(count - 1);
  };
  return (
    <div className="app">
       {count} <br/><br/>
       <div className="a1">
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      </div>
    </div>
  );
}

 const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App();
