import { useState } from "react";
import "./App.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const average = Math.round(((good - bad) / (good + bad)) * 100) / 100;
  const positive = Math.round((good / (good + bad)) * 100);

  return (
    <div>
      <h2>give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}></button>
      <button onClick={() => setBad(bad + 1)}></button>

      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average{average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

export default App;
