import React from "react";

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter shown with:{" "}
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};
