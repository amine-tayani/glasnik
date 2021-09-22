import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { RESET_PASSWORD } from "../../../graphql/mutations/auth";
import Spinner from "../../../components/shared/Spinner";

const ResetPwd = () => {
  const { register, handleSubmit } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const cookies = new Cookies();
  const router = useRouter();
  const { token } = router.query;

  const [resetPassword, { loading, error, data }] = useMutation(
    RESET_PASSWORD,
    {
      onCompleted({ resetPassword }) {
        if (resetPassword) {
          cookies.set("auth-token", resetPassword.token);
        }
      },
    }
  );
  if (error) {
    console.log(error.networkError);
  }
  const passwordReset = async (data) => {
    try {
      await resetPassword({
        variables: {
          password: data.password,
          confirmPassword: data.confirmPassword,
          resetToken: token,
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
        <title>Glasnik - Reset password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Spinner />
      ) : (
        <section className="font-inter">
          <div className="container mx-auto items-center px-5 py-12 lg:px-20">
            <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
              {showMessage ? (
                <>
                  <h1 className="text-3xl font-extrabold font-tweb tracking-wide text-white">
                    Reset Password
                  </h1>
                  <p className="text-sm mt-2 font-bold leading-7 text-gray-400">
                    {data?.resetPassword.message}
                  </p>
                  <Link href="/">
                    <div className=" mt-4 font-tweb">
                      <button
                        type="submit"
                        className="w-full py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out  bg-[#0071FF] text-white font-semibold focus:outline-none "
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
                      Reset Password
                    </h1>
                    <p className="text-sm  font-medium leading-7 text-gray-400">
                      Please choose your new password
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(passwordReset)}>
                    {error && (
                      <p className="text-sm mb-4 font-tweb text-red-600">
                        *{error.message}
                      </p>
                    )}
                    <div className="relative ">
                      <label
                        htmlFor="password"
                        className="text-sm  font-medium leading-7 text-gray-100"
                      >
                        New Password
                        <input
                          {...register("password", { required: true })}
                          type="password"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Enter your new password";
                          }}
                          name="password"
                          placeholder="Enter your new password"
                          className="w-full bg-[#272D36] px-4 py-2 mt-2 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071FF] "
                        />
                      </label>
                    </div>
                    <div className="relative  mt-4">
                      <label
                        htmlFor="confirmPassword"
                        className="text-sm  font-medium leading-7 text-gray-100"
                      >
                        Confirm Password
                        <input
                          {...register("confirmPassword", { required: true })}
                          type="password"
                          onFocus={(e) => {
                            e.target.placeholder = "";
                          }}
                          onBlur={(e) => {
                            e.target.placeholder = "Confirm your new password";
                          }}
                          name="confirmPassword"
                          placeholder="Confirm your new password"
                          className="w-full bg-[#272D36] px-4 py-2 mt-2 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0071FF]"
                        />
                      </label>
                    </div>

                    <div className=" mt-4 font-tweb">
                      <button
                        type="submit"
                        className="w-full px-8 py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none "
                      >
                        Save Password
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
export default ResetPwd;
