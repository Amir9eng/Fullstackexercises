import React from "react";

export default function Person({ persons }) {
  return (
    <div>
      {persons.map((person) => (
        <li key="person.name">
          {person.name}:{person.number}
        </li>
      ))}
    </div>
  );
}
