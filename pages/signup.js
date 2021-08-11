import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { CREATE_ACCOUNT } from "../graphql/mutations/auth"
import { useMutation } from "@apollo/client"
import { useState } from "react"
const Signup = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [createAccount, { data, loading, error }] = useMutation(CREATE_ACCOUNT)

  const creatingAccount = (e) => {
    e.preventDefault()
    createAccount({ variables: { username, email, password } })
    setUsername("")
    setEmail("")
    setPassword("")
    router.push("/")
  }

  return (
    <div>
      <Head>
        <title>Glasnik - Create an account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="font-sand">
        <div className="container mx-auto items-center px-5 py-12 lg:px-20">
          <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white shadow-2xl   rounded-lg lg:w-2/6 md:w-1/2 md:mt-0">
            <div className="flex justify-center items-center mb-4">
              <div className="w-3 h-3 p-3 mr-2 rounded-full bg-gradient-to-tr  from-indigo-400 to-blue-700"></div>
              <h2 className="block p-2 text-xl font-tweb font-extrabold tracking-widest transition duration-500 ease-in-out transform cursor-pointer lg:text-3xl lg:mr-8">
                Glasnik
              </h2>
            </div>
            {error && <p className="text-xs text-red-600">{error.message}</p>}
            <form onSubmit={creatingAccount}>
              <div>
                <div className="relative ">
                  <label htmlFor="email" className="text-sm  font-bold leading-7 text-gray-700">
                    What's your email?
                  </label>

                  <input
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    type="text"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter your email")}
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-2 text-base border border-gray-400 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent "
                  />
                </div>
                <div className="relative mt-4">
                  <label htmlFor="username" className="text-sm  font-bold leading-7 text-gray-700">
                    What should we call you?
                  </label>
                  <input
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }}
                    type="text"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Enter a username")}
                    name="username"
                    placeholder="Enter a username"
                    className="w-full px-4 py-2 mt-2 text-base border border-gray-400 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>
                <div className="relative mt-4">
                  <label htmlFor="password" className="text-sm  font-bold leading-7 text-gray-700">
                    Create a password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    type="password"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Type a password")}
                    name="password"
                    placeholder="Type a password"
                    className="w-full px-4 py-2 mt-2 text-base border border-gray-400 transition duration-300 ease-in-out transform rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-700"
                  />
                </div>

                <div className="font-tweb mt-4 ">
                  <button
                    className="w-full px-8 py-3 my-2 rounded-lg text-base tracking-wider transform transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none "
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <Link href="/login">
                    <button className="w-full px-8 py-3 my-2  font-semibold text-base transform tracking-wider transition duration-500 ease-in-out bg-gray-100 hover:bg-gray-200 text-black focus:outline-none rounded-lg">
                      Log In
                    </button>
                  </Link>
                </div>
                <p className="mx-auto mt-3 text-xs text-gray-500 font-tweb">
                  By clicking on sign-up, you agree to Glasnik's Terms and Conditions of Use.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup
