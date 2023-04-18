import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navigation from '../../components/Navigation';

function UCreviewCanteen() {
  const router = useRouter();

  const prevPage = "/canteens/UCcanteen"

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:3000/api/reviews/canteen/ID', { // Change this to your API endpoint
      method: 'POST',
      body: formData
    });
    router.push(prevPage); //Change this to the page
  };

  return (
    <div className="bg-gray-100">

      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <img src="https://times.ces.uc.pt/wp-content/uploads/UC_V_FundoClaro-negro.png" className="mx-auto m-4 h-48 object-cover mb-4 rounded-lg" />
        <h1 className="text-4xl mb-4">Review </h1>
        <h1 className="text-4xl font-bold mb-4">Universidade de Coimbra</h1>
        <p className="text-lg mb-8">Canteens</p>
        <Link href={prevPage} className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Cancel</Link>
      </section>

      <section className="my-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Leave your experience</h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-lg font-semibold mb-2 block">Select the Canteen *</label>
            <select required for="canteenName" className="text-white bg-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-500 ease-in-out">
              <option value="option1" className="rounded-lg">Select an option</option>
              <option value="option1">Bar Faculdade de Letras</option>
              <option value="option2">Cantina Amarela</option>
              <option value="option3">Cantina Central - Sala A (Azuis)</option>
              <option value="option4">Cafetaria Museu</option>
              <option value="option5">Cantina Luzio Vaz</option>
              <option value="option6">Restaurante Universitário do Polo III</option>
              <option value="option7">Cantina Químicas</option>~
              <option value="option8">Cantina São Jerónimo</option>
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

export default UCreviewCanteen;
