import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { LOGIN_TO_ACCOUNT } from "../graphql/mutations/auth";
import Spinner from "../components/shared/Spinner";
import { AuthContext } from "../context/userContext";
import { validation } from "../utils/auth/validate-login";
import ErrorAlert from "../components/ErrorAlert";

const Login = () => {
  const cookies = new Cookies();
  const { dispatch } = useContext(AuthContext);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [loginToAccount, { loading, error }] = useMutation(LOGIN_TO_ACCOUNT, {
    onCompleted({ loginToAccount }) {
      if (loginToAccount) {
        dispatch({
          type: "LOGIN",
          user: loginToAccount.user,
          token: loginToAccount.token,
        });
        cookies.set("auth-token", loginToAccount.token, {
          path: "/",
          maxAge: 60 * 60 * 60 * 2.8,
        });
        if (!error) {
          router.push(`/channels/me`);
        }
      }
    },
  });

  const login = async (data) => {
    try {
      await loginToAccount({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#111827] h-screen">
      <Head>
        <title>Glasnik - Login to your account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <Spinner />
        </div>
      ) : (
        <section className="font-inter">
          <div className="container mx-auto items-center px-5 py-12 lg:px-20">
            <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform  rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
              <div className="flex justify-center items-center mb-4">
                <img src="/logo2.svg" className=" w-36 h-20" alt="" />
              </div>
              <form onSubmit={handleSubmit(login)}>
                {error && <ErrorAlert message={error.message} />}
                <div className="relative ">
                  <label
                    htmlFor="email"
                    className="text-sm  font-medium leading-7 text-gray-100"
                  >
                    What&apos;s your email?
                    <input
                      {...register("email", validation.email)}
                      type="text"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "Email";
                      }}
                      name="email"
                      placeholder="Email"
                      className={`w-full bg-[#272D36] px-4 py-2 mt-2  transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071FF] ${
                        errors.email ? "ring-2 ring-red-600" : ""
                      }`}
                    />
                  </label>
                  {errors.email && (
                    <p className="text-red-600 text-sm my-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="relative mt-4">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-7 text-gray-100"
                  >
                    Enter your password
                    <input
                      {...register("password", validation.password)}
                      type="password"
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        e.target.placeholder = "Type your password";
                      }}
                      name="password"
                      placeholder="Type your password"
                      className={`w-full bg-[#272D36] px-4 py-2 mt-2  transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071FF] ${
                        errors.password ? "ring-2 ring-red-600" : ""
                      }`}
                    />
                  </label>
                  {errors.password && (
                    <p className="text-red-600 text-sm  my-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" name="" id="" />
                    <p className="text-sm font-medium leading-7 text-gray-100">
                      Remember me
                    </p>
                  </div>
                  <Link href="/auth/forgotPassword">
                    <p className="cursor-pointer text-sm font-medium leading-7 text-blue-500">
                      Forgot password?
                    </p>
                  </Link>
                </div>
                <div className=" mt-4 font-tweb">
                  <button
                    type="submit"
                    className="w-full px-8 py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out bg-[#0071FF] text-white font-semibold focus:outline-none "
                  >
                    Log In
                  </button>
                </div>
                <div className="flex items-center mt-3 text-sm font-medium space-x-1">
                  <p className="text-gray-100">Not registred yet?</p>
                  <Link href="/signup">
                    <p className="cursor-pointer text-sm  leading-7 text-blue-500">
                      Sign up here
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default Login;
