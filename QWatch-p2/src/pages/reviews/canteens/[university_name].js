import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import canteens_by_university from '../../../database_test/canteens_by_university';
import get_uni_info from '../../../database_test/get_uni_info';

// getServersideProps is used to fetch data from the database
export async function getServerSideProps(context) {
  const university_name = context.query.university_name;

  const canteens = await canteens_by_university(university_name);
  const uni_names = await get_uni_info(university_name);

  return ({
    props: {
      university_name: uni_names,
      canteens: canteens,
    },
  });
}

export default function reviewCanteen(props) {
  const router = useRouter();
  const university_name = props.university_name;
  const canteens = props.canteens;
  
  const prevPage = `/canteens/${university_name.shortName}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = {
      canteenName: formData.get('canteenName'),
      canteenRating: formData.get('canteenRating'),
      foodRating: formData.get('foodRating'),
    }
    fetch(`http://localhost:3000/api/reviews/canteen/${formData.get('canteenName')}`, { // Change this to your API endpoint
      method: 'POST',
      body: JSON.stringify(body),
    });
    router.push(prevPage); //Change this to the page
  };

  return (
    <div className="bg-gray-100">

      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <img src={university_name.imageURL} className="mx-auto m-4 h-48 object-cover mb-4 rounded-lg" />
        <h1 className="text-4xl mb-4">Review </h1>
        <h1 className="text-4xl font-bold mb-4">{university_name.name}</h1>
        <p className="text-lg mb-8">Canteens</p>
        <Link href={prevPage} className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Cancel</Link>
      </section>

      <section className="my-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Leave your experience</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-lg font-semibold mb-2 block">Select the Canteen *</label>
            <select required for="canteenName" name="canteenName" className="text-white bg-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-500 ease-in-out">
              {canteens.map((canteen) => (
                <option value={canteen.id}>{canteen.canteenName}</option>))
              }
            </select>
          </div>

          <div>
            <label htmlFor="studyRoom" for="canteenRating" className="text-lg font-semibold mb-2 block">Rating *</label>
            <input required type="number" name="canteenRating" id="canteenRating" min="0" max="10" placeholder="Enter rating out of 10" className="border-gray-400 border-2 rounded-md py-2 px-4 w-72" />
          </div>

          <div>
            <label htmlFor="Fichas disponíveis na sala" for="foodRating" className="text-lg font-semibold mb-2 block">Food Rating *</label>
            <input required type="number" name="foodRating" id="foodRating" min="0" max="50" placeholder="Enter rating out of 10" className="border-gray-400 border-2 rounded-md py-2 px-4 w-72" />
          </div>

          <input type="submit" className="text-center text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-indigo-500 transition duration-300 ease-in-out" />

        </form>
      </section>

    </div>
  );
}


