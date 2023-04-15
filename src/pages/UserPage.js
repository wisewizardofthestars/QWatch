import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function UserPage() {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center bg-white py-4 px-6 shadow-md">
        <div>
          <a href="/" className="text-3xl font-bold text-indigo-500">QWatch</a>
        </div>
        <div>
          <ul className="flex space-x-6 text-gray-600 ">
            <li><a href="/" className="hover:text-black hover:font-bold">Home</a></li>
            <li><a href="/cantine" className="hover:text-black hover:font-bold">Cantines</a></li>
            <li><a href="/study" className="hover:text-black hover:font-bold">Study Rooms</a></li>
            <li><a href="/profile" className="hover:text-black hover:font-bold">My Profile</a></li>
            <li><a href="/contact" className="hover:text-black hover:font-bold" >Contact</a></li>
          </ul>
        </div>
      </nav>
        {/* Profile */}


    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-2 sm:mb-0">
            User Profile
          </h1>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <button
              type="button"
              className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">
              
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Some personal information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  Roggy Com Laço
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  cl0wn@ist.com
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  (555) 555-5555
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                  University
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                  IST <br />
                  Instituto Superior Terminal
                  </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>


    {/* Footer */}
  <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="flex justify-between items-center mb-8">
      <div>
        <a href="/" className="text-3xl font-bold text-indigo-500">QWatch</a>
        <p className="text-gray-600">Made with ❤️ by Roadtrip To Coimbra</p>
      </div>
      
    </div>
    <p className="text-gray-600 text-center">© 2023 QWatch. All rights reserved.</p>
  </footer>
</div>
);
}

export default UserPage;
