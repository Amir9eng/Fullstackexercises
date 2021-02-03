import "./App.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_KEY;

const SingleCountry = ({ country }) => {
  const { name, population, languages, flag, capital } = country[0];
  const [weather, setWeather] = useState("");
  useEffect(() => {
    Axios.get(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`
    )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [capital]);
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital - {capital}</p>
      <p>Population - {population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, languageIndex) => (
          <li key={`language${languageIndex}`}>{language.name}</li>
        ))}
      </ul>
      <img src={flag} alt={`${name}-flag`} style={{ width: "30rem" }} />
      {weather && (
        <div>
          <h4>Weather in {capital} </h4>
          <p>Temperature: {weather.current.temperature} celcius</p>
          <img src={weather.current.weather_icons} alt="weather-icon" />
          <p>
            Wind: {weather.current.wind_speed} mph direction{" "}
            {weather.current.wind_dir}
          </p>
        </div>
      )}
    </div>
  );
};

const DisplayingCountries = ({
  filtered,
  countries,
  showCountries,
  setShowCountries,
}) => {
  const countriesToShow = filtered.trim()
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(filtered.toLowerCase())
      )
    : [];
  const countriesLength = countriesToShow.length;

  return (
    <div>
      {!showCountries.length ? (
        countriesLength === 1 ? (
          <SingleCountry country={countriesToShow} />
        ) : countriesLength < 10 ? (
          countriesToShow.map((country, countryIndex) => (
            <div
              style={{ display: "flex", alignItems: "center" }}
              key={`country-index${countryIndex}`}
            >
              <p>{country.name}</p>
              <button onClick={() => setShowCountries([country])}>show</button>
            </div>
          ))
        ) : (
          <p>Too Many matches,specify another filter</p>
        )
      ) : (
        <SingleCountry country={showCountries} />
      )}
    </div>
  );
};
function App() {
  const [showCountries, setShowCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");

  useEffect(() => {
    Axios("https://restcountries.eu/rest/v2/all")
      .then(({ data }) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    if (showCountries.length) setShowCountries([]);
    setFiltered(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <div>
          find countries:{" "}
          <input
            type="text"
            value={filtered}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </form>
      <DisplayingCountries
        filtered={filtered}
        countries={countries}
        showCountries={showCountries}
        setShowCountries={setShowCountries}
      />
    </div>
  );
}

export default App;
