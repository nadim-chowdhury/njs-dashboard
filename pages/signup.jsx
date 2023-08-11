import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);

  return (
    <section className="text-gray-600 body-font relative bg-white border-l">
      <div className="container px-5 py-24 mx-auto h-screen flex items-center justify-center">
        {user ? (
          <h2 className="text-2xl font-bold text-blue-500">
            Registration Successful &nbsp;
            <Link
              href="/"
              className="border-2 text-center px-4 py-2 rounded-tl-lg rounded-br-lg hover:bg-blue-100"
            >
              Continue
            </Link>
          </h2>
        ) : (
          <div className="w-80 flex flex-col mt-8">
            <h2 className="auth_btn text-center mb-4">Signup Here</h2>

            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                className="auth_input"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                value={email}
                className="auth_input"
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
                value={password}
                className="auth_input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="auth_btn"
              onClick={() =>
                createUserWithEmailAndPassword(email, password, name)
              }
            >
              Submit
            </button>

            <h4 className="mt-8 border-2 pl-2 py-2 rounded-tl-lg rounded-br-lg">
              Already have an account &nbsp;
              <Link
                href="/login"
                className="bg-blue-500 text-white px-4 py-1 rounded-tl-lg rounded-br-lg hover:bg-blue-600"
              >
                Log in Here
              </Link>
            </h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
