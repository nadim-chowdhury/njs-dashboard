export default function CityWeather({ city }) {
  return (
    <div className="border text-md p-4 rounded-lg bg-white">
      <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
      <div className="flex">
        <p className="w-1/2">
          <span className="rounded-r-md mr-2">Lon:</span> {city.coord?.lon}
        </p>
        <p>
          <span className="rounded-r-md mr-2">Lat:</span> {city.coord?.lat}
        </p>
      </div>

      <div className="flex">
        <p className="w-1/2">
          <span className="rounded-r-md mr-2">Temperature:</span>
          {city.main?.temp}
        </p>
        <p>
          <span className="rounded-r-md mr-2">Feels Like:</span>
          {city.main?.feels_like}
        </p>
      </div>

      <div className="flex">
        <p className="w-1/2">
          <span className="rounded-r-md mr-2">Pressure:</span>
          {city.main?.pressure}
        </p>
        <p>
          <span className="rounded-r-md mr-2">Humidity:</span>
          {city.main?.humidity}
        </p>
      </div>
      <div className="flex">
        <p className="w-1/2">
          <span className="rounded-r-md mr-2">Weather:</span>{" "}
          {city.weather?.[0]?.main}
        </p>
        <p>
          <span className="rounded-r-md mr-2">Visibility:</span>
          {city.visibility}
        </p>
      </div>
      <div className="flex">
        <p className="w-1/2">
          <span className="rounded-r-md mr-2">Sunrise:</span>
          {new Date(city.sys?.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          <span className="rounded-r-md mr-2">Sunset:</span>
          {new Date(city.sys?.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
