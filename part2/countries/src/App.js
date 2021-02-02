import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

const OneCountry = ({ country }) => {
  const { name, population, languages, flag, capital } = country[0];
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital - {capital}</p>
      <p>Population - {population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, languageIndex) => (
          <li key={`language-number${languageIndex}`}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={`${name}-flag`} style={{ width: "30rem" }} />
    </div>
  );
};

const DisplayingCountries = ({ filtered, countries }) => {
  const countriesToShow = filtered.trim()
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(filtered.toLowerCase())
      )
    : [];
  const countriesLength = countriesToShow.length;

  return (
    <div>
      {countriesLength === 1 ? (
        <OneCountry country={countriesToShow} />
      ) : countriesLength < 10 ? (
        countriesToShow.map((country, countryIndex) => (
          <p key={`country-Index${countryIndex}`}>{country.name}</p>
        ))
      ) : (
        <p>Too many matches, specify another filter </p>
      )}
    </div>
  );
};
function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    Axios("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

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
      <DisplayingCountries filtered={filtered} countries={countries} />
    </div>
  );
}

export default App;
