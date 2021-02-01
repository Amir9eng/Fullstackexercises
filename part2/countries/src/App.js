import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    Axios("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const countriesToShow = filtered.trim()
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(filtered.toLowerCase())
      )
    : [];

  return (
    <div className="App">
      <form>
        <div>
          find countries:{" "}
          <input
            type="text"
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
          />
        </div>
      </form>
      <div>
        {countriesToShow.map((country, countryIndex) => (
          <li key={`country-Index${countryIndex}`}>{country.name}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
