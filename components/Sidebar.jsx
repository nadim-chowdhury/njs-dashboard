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
    <div className="flex">
      <div className="flex flex-col justify-between h-screen p-4 bg-white border-r fixed top-0 left-0">
        <Link
          href="/"
          className="text-xl font-bold text-center bg-blue-500 text-white rounded-tl-lg rounded-br-lg p-2"
        >
          IIO TM
        </Link>
        <div>
          <Link
            href="/"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <AiFillHome />
          </Link>
          <Link
            href="/weather"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <TiWeatherCloudy />
          </Link>
          <Link
            href="/about"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <AiFillInfoCircle />
          </Link>
          <Link
            href="/countries"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <TbWorld />
          </Link>
          <Link
            href="/customers"
            className="hover:bg-blue-500 hover:text-white bg-gray-200 text-2xl font-bold w-28 py-2 rounded-tl-lg rounded-br-lg flex justify-center my-2 transition duration-300"
          >
            <MdPermContactCalendar />
          </Link>
        </div>

        {user ? (
          <div
            className="flex justify-center bg-blue-500 text-white text-xl font-bold rounded-tl-lg rounded-br-lg py-2 cursor-pointer"
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
            className="flex justify-center bg-blue-500 text-white text-xl font-bold rounded-tl-lg rounded-br-lg py-2"
          >
            Log In
          </Link>
        )}
      </div>
      <main className="w-full ml-36">{children}</main>
    </div>
  );
};

export default Sidebar;
