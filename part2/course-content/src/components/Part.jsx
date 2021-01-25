import React from "react";

function Part({ part, exercises }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}
export default Part;
