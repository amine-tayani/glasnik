import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { LOGIN_TO_ACCOUNT } from "../graphql/mutations/auth";

const Login = () => {
  const router = useRouter();
  const { handleSubmit, register } = useForm();
  const [loginToAccount, { data, loading, error }] =
    useMutation(LOGIN_TO_ACCOUNT);
  if (data) {
    console.log(data);
  }
  const login = async (data) => {
    try {
      await loginToAccount({
        variables: { email: data.email, password: data.password },
      });
      console.log(error.message, data, loading);
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Head>
        <title>Glasnik - Login to your account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="font-sand">
        <div className="container mx-auto items-center px-5 py-12 lg:px-20">
          <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white shadow-2xl rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
            <div className="flex justify-center items-center mb-4">
              <div className="w-3 h-3 p-3 mr-2 rounded-full bg-gradient-to-tr  from-indigo-400 to-blue-700" />
              <h2 className="block p-2 text-xl font-tweb font-extrabold tracking-widest transition duration-500 ease-in-out transform cursor-pointer lg:text-3xl lg:mr-8">
                Glasnik
              </h2>
            </div>
            <form onSubmit={handleSubmit(login)}>
              <div className="relative ">
                <label
                  htmlFor="email"
                  className="text-sm  font-bold leading-7 text-gray-700"
                >
                  What&apos;s your email?
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder = "email";
                    }}
                    name="email"
                    placeholder="email"
                    className="w-full px-4 py-2 mt-2 text-base border border-gray-400 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent "
                  />
                </label>
              </div>

              <div className="relative mt-4">
                <label
                  htmlFor="password"
                  className="text-sm  font-bold leading-7 text-gray-700"
                >
                  Enter your password
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    onFocus={(e) => {
                      e.target.placeholder = "";
                    }}
                    onBlur={(e) => {
                      e.target.placeholder = "Type your password";
                    }}
                    name="password"
                    placeholder="Type your password"
                    className="w-full px-4 py-2 mt-2 text-base border border-gray-400 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </label>
              </div>

              <div className=" mt-4 font-tweb">
                <button
                  type="submit"
                  className="w-full px-8 py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none "
                >
                  Log In
                </button>
                <Link href="/signup">
                  <button
                    type="button"
                    className="w-full px-8 py-3 my-2  font-semibold text-base transform tracking-wider transition duration-500 ease-in-out bg-gray-100 hover:bg-gray-200 text-black focus:outline-none rounded-lg"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
