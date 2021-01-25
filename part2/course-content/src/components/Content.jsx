import React from "react";
import Part from "./Part";
function Content({ parts }) {
  return (
    <div>
      {parts.map((part, partIndex) => (
        <Part key={`part_${partIndex}`} part={part} />
      ))}
    </div>
  );
}
export default Content;
