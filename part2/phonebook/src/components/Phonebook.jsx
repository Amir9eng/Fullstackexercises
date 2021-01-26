import React from "react";

function Phonebook({ persons }) {
  console.log(persons);
  return <li>{persons.name}</li>;
}

export default Phonebook;
