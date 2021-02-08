import React from "react";

export default function Person({ persons, deleteContact }) {
  return (
    <div>
      {persons.map((person, personIndex) => (
        <li key={person.name}>
          {person.name}:{person.number}
          <button
            name={person.name}
            id={person.id}
            onClick={() => deleteContact(person)}
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
}
