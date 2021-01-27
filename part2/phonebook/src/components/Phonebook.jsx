import React from "react";

function Phonebook({ persons }) {
  console.log(persons);
  return (
    <li>
      {persons.name}: {persons.number}
    </li>
  );
}

export default Phonebook;
