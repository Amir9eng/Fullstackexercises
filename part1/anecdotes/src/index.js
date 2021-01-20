import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const initVotes = anecdotes.map((elem) => 0);
  console.log(initVotes);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initVotes);
  // const [mostVotes, setMostVotes] = useState(0);

  const randomNum = () => Math.floor(Math.random() * 5);

  let highestVote = Math.max(...votes);

  let highestVoted = votes.indexOf(highestVote);

  const addVotes = (selected) => {
    const allVotes = [...votes];
    allVotes[selected] += 1;
    setVotes(allVotes);
  };
  <p>has {votes[selected]} votes</p>;
  console.log(selected);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => setSelected(randomNum)}> next anecdote </button>
      <button onClick={() => addVotes(selected)}>vote</button>
      <h1>Anecdotes with the most votes </h1>
      {highestVote > 0 ? (
        <>
          <span>{anecdotes[highestVoted]}</span>
          <span>has {votes[highestVoted]} votes</span>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
