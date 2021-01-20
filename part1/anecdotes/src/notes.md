     const handleNextAnecdote = () => {

const nextNum = Math.floor(Math.random() \* anecdotes.length);
setSelected(nextNum);
};

const addVotes = () => {
const newVotes = [...votes];
newVotes++;
if (newVotes[selected] > newVotes[mostVotes]) {
setMostVotes(selected);
}
setVotes(newVotes);
};
