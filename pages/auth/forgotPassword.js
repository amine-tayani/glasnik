import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { FORGOT_PASSWORD } from "../../graphql/mutations/auth";
import Spinner from "../../components/shared/Spinner";

const ForgotPwd = () => {
  const { handleSubmit, register } = useForm();
  const [showMessage, setShowMessage] = useState(false);
  const [forgotPassword, { error, data, loading }] =
    useMutation(FORGOT_PASSWORD);

  const sendMail = async (data) => {
    try {
      await forgotPassword({
        variables: {
          email: data.email,
        },
      });
      if (!error) {
        setShowMessage(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="bg-[#1D232A] h-screen">
      <Head>
        <title>Glasnik - Forgot password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <Spinner />
        </div>
      ) : (
        <section className="font-inter">
          <div className="container mx-auto items-center px-5 py-12 lg:px-20">
            <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-[#323741]shadow-2xl rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
              {showMessage ? (
                <>
                  <h1 className="text-3xl font-extrabold font-tweb tracking-wide text-white">
                    Check your email
                  </h1>
                  <p className="text-sm mt-4 font-bold leading-7 text-gray-400">
                    {data.forgotPassword.message}
                  </p>
                  <Link href="/">
                    <div className=" mt-4 font-tweb">
                      <button
                        type="submit"
                        className="w-full py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out bg-[#0071FF] text-white font-semibold focus:outline-none "
                      >
                        Back to the home page
                      </button>
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex flex-col space-y-1 mb-4">
                    <Link href="/login">
                      <p className="cursor-pointer text-sm font-medium leading-7 text-blue-500">
                        back to login
                      </p>
                    </Link>
                    <h1 className="text-3xl font-extrabold font-tweb tracking-wide text-white">
                      Forgot Password
                    </h1>
                    <p className="text-sm  font-medium leading-7 text-gray-400">
                      send link to your email to reset your password
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(sendMail)}>
                    <div className="relative ">
                      <label
                        htmlFor="email"
                        className="text-sm  font-medium leading-7 text-gray-100"
                      >
                        Email
                        <input
                          {...register("email", { required: true })}
                          type="text"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "yves@gmail.com";
                          }}
                          name="email"
                          placeholder="yves@gmail.com"
                          className="w-full bg-[#272D36] px-4 py-2 mt-2 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071FF] "
                        />
                      </label>
                    </div>

                    <div className=" mt-4 font-tweb">
                      <button
                        type="submit"
                        className="w-full px-8 py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none "
                      >
                        Send Reset Link
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default ForgotPwd;
