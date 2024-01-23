import { useState } from "react";
import { auth } from "../config/firebase-config";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confrimPassword, setConfirmPassword] = useState();
  const signUp = async () => {
    if (password !== confrimPassword) {
      return alert("password must match");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <section className="bg-white xl:w-3/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <h1 className="my-3 text-center ">Login page</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Repassword"
            >
              confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Repassword"
              type="password"
              value={confrimPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Retype your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={signUp}
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <p>Already have account</p>
            <Link
              className="text-blue-500 capitalize cursor-pointer hover:text-blue-800"
              to={"/signin"}
            >
              signIn
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
