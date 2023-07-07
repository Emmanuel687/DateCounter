import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);


  const handleReset = ()=>{
    setCount(0)
    setSteps(1)

  }

  const handleAddCount = () => {
    setCount((c) => c + steps);
  };
  const handleSubtractCount = () => {
    setCount((c) => c - steps);
  };

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input type="range" min="0" max="10" value={steps} onChange={(e)=>setSteps(+e.target.value)}></input>
        <span>Step:{steps}</span>
      </div>
      <div>
        <button onClick={handleSubtractCount}>-</button>
        <input type="text" value={count} onChange={(e=>setCount(+e.target.value))}></input>
        <button onClick={handleAddCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {count !==0 || steps !==1?(<button onClick={handleReset}>Reset</button>):""}
      </div>
    </div>
  );
}
