import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

const Statistics = ({ good, neutral, bad }) => {
  const allSum = good + bad + neutral;
  const sumGoodAndBad = good + bad;
  const average = Math.round(((good - bad) / sumGoodAndBad) * 100) / 100;
  const positive = Math.round((good / sumGoodAndBad) * 100);

  return (
    <div>
      {allSum ? (
        <div>
          <h2>Statistics</h2>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {allSum}</p>
          <p>average {average ? average : 0}</p>
          <p>positive {positive ? positive : 0} %</p>
        </div>
      ) : (
        <p>No Feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title text="Give Feedback" />
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
