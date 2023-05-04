import Header from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div className="bg-gray-100 w-full pb-4">
      <Header />

      <div className="m-4 flex items-center">
        <input
          type="text"
          className="rounded-lg p-2 border w-auto border-blue-500 focus:outline-blue-400"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-3 rounded-lg ml-2">
          <BsSearch />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center m-4 p-4 bg-white rounded-lg border">
        {countries
          .filter((i) =>
            query.toLowerCase() === ""
              ? countries
              : i.name.common.toLowerCase().includes(query)
          )
          .map((c) => (
            <div key={c.id} className="countries m-4 border-2 rounded-b-lg">
              <Image src={c.flags.png} alt="" width={160} height={90} />
              <div className="bg-gray-100 text-center p-2">
                <h4 className="font-bold my-2 text-xl">
                  {c.name.common.slice(0, 12)}
                </h4>
                <h5>Region: {c.region}</h5>
                <p>Area: {c.area}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Countries;
