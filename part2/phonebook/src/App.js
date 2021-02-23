import React, { useEffect, useState } from "react"
import axios from "axios"
import { Filter } from "./components/Filter"
import Person from "./components/Person"
import { PersonForm } from "./components/PersonForm"
import contactService from "./services/contacts"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    contactService
      .getAll()
      .then((res) => setPersons(res.data))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    if (!newName.trim()) {
      alert("Please add a name")
      return
    }
    if (!newNumber.trim()) {
      alert("Please add a number")
      return
    }
    const userExist = persons.some((person) => person.name === newName)
    if (userExist) {
      if (
        window.confirm(
          `${newName} has already been added to the phonebook, do you want to replace the old number with a new one?`
        )
      ) {
        const userId = userExist.id
        contactService
          .update(userId, {
            name: userExist.name,
            number: newNumber.trim(),
          })
          .then((response) => {
            setPersons((persons) => {
              persons.map((person) => {
                if (person.id === response.data.id)
                  person.number = response.data.number
                return person
              })
            })
          })
        setNewName(" ")
        setNewNumber(" ")
        return
      }
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    axios
      .post("http://localhost:3003/api/persons", nameObject)
      .then((response) => {
        setPersons(persons.concat(nameObject))
        setNewName(" ")
        setNewNumber(" ")
      })
  }

  const deleteContact = (person) => {
    const id = Number(person.id)
    const message = `Do you really want to delete ${person.name}`

    if (window.confirm(message) === true) {
      contactService
        .destroy(id)
        .then((deletedContact) =>
          setPersons(persons.filter((p) => p.id !== id))
        )
    }
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    console.log(event)
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleFilter = persons.filter(
    (person) =>
      person.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) > -1
  )

  const contactToShow = handleFilter.length ? handleFilter : persons

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
      <Person persons={contactToShow} deleteContact={deleteContact} />
    </div>
  )
}

export default App
