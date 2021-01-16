import { useState } from "react";
import "./App.css";
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>this app is used by pressing the buttons</div>;
  }

  return <div>button press history: {allClicks.join(" ")}</div>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      {left}
      <button onClick={setGood}>left</button>
      <button onClick={setBad}>right</button>
      <History allClicks={setNeutral} />
    </div>
  );
};

export default App;
