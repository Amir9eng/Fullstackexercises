import { useState } from "react";
import "./App.css";
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>this app is used by pressing the buttons</div>;
  }

  return <div>button press history: {allClicks.join(" ")}</div>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [value, setValue] = useState(10);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const hello = () => {
    const handler = () => console.log('i"m here');
    return handler;
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />

      <div>
        {value}
        <button onClick={hello()}>button</button>
      </div>
    </div>
  );
};

export default App;
