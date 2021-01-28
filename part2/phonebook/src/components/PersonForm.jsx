import React from "react";

export const PersonForm = ({
  addName,
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
}) => {
  return (
    <div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number:{" "}
          <input value={newNumber} onChange={handleNewNumber} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
