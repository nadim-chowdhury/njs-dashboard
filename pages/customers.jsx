import Header from "@/components/Header";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/Data";

const customers = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between items-center cursor-pointer bg-slate-200 pl-4 rounded-lg font-semibold">
            <p>Name</p>
            <p className="sm:text-left text-right">Email</p>
            <p className="hidden md:grid">Last Order</p>
            <p className="hidden sm:grid">Method</p>
          </div>

          <ul>
            {data.map((o) => {
              return (
                <li
                  key={o.id}
                  className="hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <BsPersonFill className="text-blue-500" />
                    </div>
                    <p className="ml-4">{o.name.first + " " + o.name.last}</p>
                  </div>
                  <p className="text-gray-600 ml-2 sm:text-left text-right">{`${o.name.first.toLowerCase()}${o.name.last.toLowerCase()}@gmail.com`}</p>
                  <p className="text-gray-600 ml-1">{o.date}</p>

                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 ml-1">{o.method}</p>
                    <BsThreeDotsVertical />
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

export default customers;
