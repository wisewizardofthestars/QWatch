import Link from 'next/link'

function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-6">
          Login
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
          <Link href="/profile" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold transition duration-300 ease-in-out hover:text-white hover:bg-gray-500 hover:shadow-lg transform hover:scale-105">Join the Q</Link>

            <Link href="/register" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;