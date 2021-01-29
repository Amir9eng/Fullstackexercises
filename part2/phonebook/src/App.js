import React, { useEffect, useState } from "react";
import axios from "axios";
import { Filter } from "./components/Filter";
import Person from "./components/Person";
import { PersonForm } from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [notes, setNotes] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fufilled ");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

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
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFilter = persons.filter(
    (person) =>
      person.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) > -1
  );

  const contactToShow = handleFilter.length ? handleFilter : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new contact</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNewName}
        handleNumberChange={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Person persons={contactToShow} />
    </div>
  );
};

export default App;
