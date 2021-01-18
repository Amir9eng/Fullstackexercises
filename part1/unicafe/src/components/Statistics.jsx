import React from "react";
import Statistic from "./Statistic";

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
          <table>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} unit="%" />
          </table>
        </div>
      ) : (
        <p>No Feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
