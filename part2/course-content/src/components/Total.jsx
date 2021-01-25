import React from "react";

function Total({ parts }) {
  return (
    <div>
      <p>
        Sum of exercises{" "}
        {parts.reduce((sum, parts) => sum + parts.exercises, 0)}
      </p>
    </div>
  );
}

export default Total;
