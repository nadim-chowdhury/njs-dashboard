import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { MdPermContactCalendar } from "react-icons/md";
import { auth } from "@/firebase";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";

const Sidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <div className="sm:flex">
      <div className="flex sm:flex-col justify-between sm:h-screen p-4 bg-white border sm:fixed sm:top-0 sm:left-0">
        <Link
          href="/"
          className="sm:text-xl font-bold text-center my-auto sm:my-0 bg-blue-500 text-white rounded-tl-lg rounded-br-lg p-2 mr-2 sm:mr-0 text-sm"
        >
          IIO TM
        </Link>
        <div className="grid grid-cols-5 gap-2 sm:block">
          <Link
            href="/"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold px-1 sm:w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <AiFillHome />
          </Link>
          <Link
            href="/weather"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold px-1 sm:w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <TiWeatherCloudy />
          </Link>
          <Link
            href="/about"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold px-1 sm:w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <AiFillInfoCircle />
          </Link>
          <Link
            href="/countries"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold px-1 sm:w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <TbWorld />
          </Link>
          <Link
            href="/customers"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold px-1 sm:w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <MdPermContactCalendar />
          </Link>
        </div>

        {user ? (
          <div
            className="sm:text-xl font-bold text-center my-auto sm:my-0 bg-blue-500 text-white rounded-tl-lg rounded-br-lg p-2 ml-2 sm:ml-0 uppercase text-sm"
            onClick={async () => {
              const success = await signOut();
              if (success) {
                alert("You are sign out");
              }
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link
            href="/login"
            className="sm:text-xl font-bold text-center my-auto sm:my-0 bg-blue-500 text-white rounded-tl-lg rounded-br-lg p-2 ml-2 sm:ml-0 uppercase text-sm"
          >
            Log In
          </Link>
        )}
      </div>
      <main className="w-full sm:ml-36">{children}</main>
    </div>
  );
};

export default Sidebar;
