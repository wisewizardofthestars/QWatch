import Link from 'next/link'


function UserPage() {
  return (
    <div className="bg-gray-100">

      {/* Profile */}

      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
  <div className="flex items-center">
    <img
      className="w-24 h-24 rounded-full object-cover mr-4 shadow-lg"
      src="https://i.ytimg.com/vi/cl0W3pUepp8/hqdefault.jpg"
      alt="Tomas Teixeira"
    />
    <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-2 sm:mb-0">
      User Profile
    </h1>
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-4">
    <button
      type="button"
      className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out"
    >
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
                Some personal information about you.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Username
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    TomasTex11
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    Tomás Teixeira
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    ist1104165@tecnico.ulisboa.pt
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    (+351) 963 452 525
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    University
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    IST <br />
                    Instituto Superior Técnico
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Major
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    LEIC-A <br />
                   Licenciatura em Engenharia Informática e de Computadores
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-center sm:justify-center my-5">
  <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-4 sm:mb-0">
    Join the Q
  </h1>
  <div className="flex justify-center mt-4">
    <Link href="/study" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out mr-3">
      Join study room
    </Link>
    <Link href="/canteens" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">
      Join canteen
    </Link>
  </div>
</div>



        
        </div>

      </div>


    </div>
  );
}

export default UserPage;
