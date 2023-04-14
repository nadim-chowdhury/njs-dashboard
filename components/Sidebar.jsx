import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between h-screen p-4 bg-white border-r-[1px]">
        <div className="text-xl font-bold text-center bg-blue-500 text-white rounded-tl-lg rounded-br-lg p-2">
          IIO TM
        </div>
        <div>
          <Link href="/">
            <div className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-md flex justify-center my-2 transition duration-300">
              <AiFillHome />
            </div>
          </Link>
          <Link href="/about">
            <div className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-md flex justify-center my-2 transition duration-300">
              <AiFillInfoCircle />
            </div>
          </Link>
          <Link href="/customers">
            <div className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-md flex justify-center my-2 transition duration-300">
              <MdPermContactCalendar />
            </div>
          </Link>
        </div>
        <div className="flex justify-center bg-blue-500 text-white text-2xl rounded-tl-lg rounded-br-lg py-2">
          <FaUserCircle />
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
