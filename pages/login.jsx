import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  // console.log(email, password);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 mx-auto h-screen flex flex-col items-center justify-center">
        {user ? (
          <h2 className="text-2xl font-bold text-blue-500">
            Login Successful &nbsp;
            <Link
              href="/"
              className="border-2 text-center px-4 py-2 rounded-tl-lg rounded-br-lg hover:bg-blue-100"
            >
              Go To Home
            </Link>
          </h2>
        ) : (
          <div className="w-80 flex flex-col mt-8">
            <h2 className="text-white text-center text-xl bg-blue-500 border-0 py-2 px-6 mb-4 rounded-tl-lg rounded-br-lg">
              Sign in Here
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-tl-lg rounded-br-lg text-lg"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Sign in
            </button>

            <h3 className="my-4 leading-7 text-md text-gray-600">Or</h3>

            <button
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-tl-lg rounded-br-lg text-lg"
              onClick={() => signInWithGoogle()}
            >
              Sign in With Google
            </button>

            <h4 className="mt-8 border-2 pl-2 py-2 rounded-tl-lg rounded-br-lg bg-white">
              Don&apos;t have any account &nbsp;
              <Link
                href="/signup"
                className="bg-blue-500 text-white px-4 py-1 rounded-tl-lg rounded-br-lg hover:bg-blue-600"
              >
                Register Here
              </Link>
            </h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
