import React, { useEffect, useState } from "react";
import axios from "axios";
import { Filter } from "./components/Filter";
import Person from "./components/Person";
import { PersonForm } from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [notes, setNotes] = useState([]);
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3005/contacts").then((response) => {
      console.log("promise fufilled ");
      setNotes(response.data);
    });
  };
  console.log("render", notes.length, "notes");

  useEffect(hook, []);

  const addName = (event) => {
    event.preventDefault();
    if (!newName.trim()) {
      alert("Please add a name");
      return;
    }
    if (!newNumber.trim()) {
      alert("Please add a number");
      return;
    }
    if (persons.some((event) => event.name === newName)) {
      alert(`${newName} has already been added to the phonebook`);
      setNewName(" ");
      setNewNumber("");
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    axios
      .post("http://localhost:3005/contacts", nameObject)
      .then((response) => {
        setPersons(persons.concat(nameObject));
        setNewName(" ");
        setNewNumber(" ");
      });
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    console.log(event);
    console.log(event.target.value);
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
        newNumber={newNumber}
        handleNameChange={handleNewName}
        handleNumberChange={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Person persons={contactToShow} />
    </div>
  );
};

export default App;
