import CityWeather from "@/components/CityWeather";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Weather() {
  const [city, setCity] = useState({});
  const [city1, setCity1] = useState({});
  const [city2, setCity2] = useState({});
  const [city3, setCity3] = useState({});
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=114e0dd9a9b070e3861a1dc72f06b56b`
      )
      .then((res) => setCity(res.data));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=114e0dd9a9b070e3861a1dc72f06b56b`
      )
      .then((res) => setCity1(res.data));

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=114e0dd9a9b070e3861a1dc72f06b56b`
      )
      .then((res) => setCity2(res.data));

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=montreal&appid=114e0dd9a9b070e3861a1dc72f06b56b`
      )
      .then((res) => setCity3(res.data));
  }, []);

  return (
    <div className="pb-4">
      <Header />

      <div className="m-4 flex items-center">
        <input
          type="text"
          className="rounded-lg p-3 border w-auto focus:outline-blue-400"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-4 rounded-lg ml-2"
          onClick={query.length > 0 ? handleSearch : null}
        >
          <BsSearch />
        </button>
      </div>

      <div className="m-4 pt-4 rounded-lg sm:flex">
        <div className="border p-4 rounded-lg sm:w-1/3 bg-white">
          {city.name ? (
            <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
          ) : (
            <h3 className="text-3xl font-bold mb-2">Search any city</h3>
          )}
          this
          <div className="">
            <div className="flex">
              <p className="w-1/2">
                <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1 mr-2">
                  Lat:{" "}
                </span>
                {city.name ? city.coord?.lat : "No info"}
              </p>
              <p className="w-1/2">
                <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                  Lon:{" "}
                </span>
                {city.name ? city.coord?.lon : "No info"}
              </p>
            </div>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Temp:
              </span>{" "}
              {city.name ? city.main?.temp : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Feels Like:
              </span>{" "}
              {city.name
                ? city.main?.feels_like
                : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Pressure:{" "}
              </span>
              {city.name
                ? city.main?.pressure
                : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Humidity:{" "}
              </span>
              {city.name
                ? city.main?.humidity
                : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Weather:{" "}
              </span>
              {city.name
                ? city.weather?.[0]?.main
                : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Visibility:
              </span>{" "}
              {city.name ? city.visibility : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Sunrise:{" "}
              </span>
              {city.name ? city.sys?.sunrise : "Search any city for this info"}
            </p>
            <p>
              <span className="bg-blue-100 px-2 rounded-tl-md rounded-br-lg block my-1">
                Sunset:{" "}
              </span>
              {city.name ? city.sys?.sunset : "Search any city for this info"}
            </p>
          </div>
        </div>

        <div className="sm:w-full">
          <div className="my-4 sm:my-0 sm:mx-4 ">
            <CityWeather city={city1} />
          </div>

          <div className="my-4 sm:my-0 sm:mx-4 sm:mt-4">
            <CityWeather city={city2} />
          </div>

          <div className="my-4 sm:my-0 sm:mx-4 sm:mt-4">
            <CityWeather city={city3} />
          </div>
        </div>
      </div>
    </div>
  );
}
