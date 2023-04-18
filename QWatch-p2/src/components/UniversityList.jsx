import React from 'react';

import Link from 'next/link';


function UniversityList(props)  {
  const universities = props.universities;

  if (!universities) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Choose a University</h1>
      <div className="grid grid-cols-3 gap-4 ">
        {universities.map((university) => (
          <div key={university.name} className="p-4 bg-white rounded-lg shadow-md max-w-64 flex flex-col justify-center items-center">
            <img src={university.imageURL} alt={university.name} className="m-4 h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold">{university.name}</h2>
            <ul className="m-0 p-0">
              <li className="flex justify-center items-center">
                <Link href={`/canteens/${university.shortName}`} className="m-4 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Select</Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


export default UniversityList;
