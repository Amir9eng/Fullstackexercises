import React from "react";

const Statistic = ({ text, value, unit }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>
          {value}
          {unit}
        </td>
      </tr>
    </>
  );
};

export default Statistic;
