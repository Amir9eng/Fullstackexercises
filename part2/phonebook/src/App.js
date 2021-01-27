import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    if (newName === "") {
      alert("Please add a name");
      return;
    }
    if (newNumber === "") {
      alert("Please add a number");
      return;
    }
    if (persons.some((event) => event.name === newName)) {
      alert(`${newName} has already been added to the phonebook`);
      return;
    }
    if (persons.some((event) => event.number === newName)) {
      alert(`${newNumber} has already been added to the phonebook`);
      return;
    }
    setPersons(persons.concat(nameObject));
    setNewName(" ");
    setNewNumber(" ");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = persons.filter(
    (person) =>
      person.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) > -1
  );

  const contactToShow = handleFilter.length ? handleFilter : persons;

  return (
    <div>
      <h2>Phonebook</h2>
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
      {/* <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNewName}
        handleNumberChange={handleNewNumber}
      /> */}
      <h2>Numbers</h2>
      Filter shown with:{" "}
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {contactToShow.map((person) => (
          <li key="person.name">
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
