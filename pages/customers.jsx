import Header from "@/components/Header";
import { BsPersonFill, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/Data";
import { useState } from "react";

const Customers = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-gray-100 h-full pb-4">
      <Header />

      <div className="m-4 flex items-center">
        <input
          type="text"
          className="rounded-lg p-3 border w-auto focus:outline-blue-400"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <button className="bg-blue-500 text-white p-4 rounded-lg ml-2">
          <BsSearch />
        </button>
      </div>

      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between items-center cursor-pointer bg-blue-200 sm:pl-4 rounded-lg font-semibold">
            <p>Name</p>
            <p className="sm:text-left">Email</p>
            <p className="hidden md:grid">Last Order</p>
            <p className="hidden sm:grid">Method</p>
          </div>

          <ul>
            {data
              .filter((i) =>
                query.toLowerCase() === ""
                  ? data
                  : i.name.first.toLowerCase().includes(query)
              )
              .map((o) => {
                return (
                  <li
                    key={o.id}
                    className="hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer text-sm sm:text-base"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 sm:p-3 rounded-lg">
                        <BsPersonFill className="text-blue-500" />
                      </div>
                      <p className="ml-4">{o.name.first + " " + o.name.last}</p>
                    </div>
                    <p className="text-gray-600 sm:ml-2 text-left">{`${o.name.first.toLowerCase()}${o.name.last.toLowerCase()}@gmail.com`}</p>
                    <p className="text-gray-600 sm:ml-1 hidden sm:block">
                      {o.date}
                    </p>

                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 sm:ml-1 hidden sm:block">
                        {o.method}
                      </p>
                      <BsThreeDotsVertical className="hidden sm:block" />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
