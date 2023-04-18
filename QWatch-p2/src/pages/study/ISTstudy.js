import React, {useState} from 'react';
import StudyUniversityList from '../StudyUniversityList';
import Link from 'next/link';

function ISTstudy() {
  const [text, setText] = useState('Join the Q');
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setText('Join  the Q');
      fetch("http://localhost:3000/api/canteens/leave/1");
    } else {    // TODO REMOVE THIS
      setText('You joined the Q');
      fetch("http://localhost:3000/api/canteens/join/1");
    }
    setClicked(!clicked);
  };

  const focusClass = clicked
    ? "text-white bg-gray-500 focus:text-white focus:bg-gray-500"
    : "";
    
  
  return (
    <div className="bg-gray-100">


      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <img src="https://upload.wikimedia.org/wikipedia/pt/e/ed/IST_Logo.png" className="mx-auto m-4 h-48 object-cover mb-4 rounded-lg" />
        <h1 className="text-4xl mb-4">You are at </h1>
        <h1 className="text-4xl font-bold mb-4">Instituto Superior Técnico</h1>
        <p className="text-lg mb-8">Alameda, Lisboa</p>
        <Link href="/study" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Change</Link>
      </section>


      {/* Main content */}
      {/* Features section */}
      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Pavilhão de Mecânica III - V1.2</h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">10/50 lugares ocupados</p>

            <p className="text-gray-600">Maior ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">06h00 - 20h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Apenas para estudantes de LEmec</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">4/6</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">35 minutos</p>
          </div>

        </div>
      </section>



      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Aquário - Pavilhão de Civil - Espaço 24h</h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">33/70 lugares ocupados</p>

            <p className="text-gray-600">Maior ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Domingo</p>
            <p className="text-gray-600">00h00 - 23h59</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Para qualquer estudante</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">0/6</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">70 minutos</p>
          </div>

        </div>
      </section>

      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Sala V0.5 - Pavilhão de Civil</h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">21/70 lugares ocupados</p>

            <p className="text-gray-600">Ocupação igual à média a um domingo</p>
            <p className="text-gray-600 mb-4">:p</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">06h00 - 20h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Para qualquer estudante do IST</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">0/2</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">5.2/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">80 minutos</p>
          </div>

        </div>
      </section>


      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Lab 15 - Pavilhão de Informática II</h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">5/89 lugares ocupados</p>

            <p className="text-gray-600">Menor ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:))</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">09h00 - 20h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Apenas para estudantes de LEIC-A</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">4/24</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">42 minutos</p>
          </div>

        </div>
      </section>



      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">LTI - Torre de Química </h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">11/58 lugares ocupados</p>

            <p className="text-gray-600">Maior ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">06h00 - 20h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Apenas para estudantes do IST</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">4/6</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">35 minutos</p>
          </div>

        </div>
      </section>



      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Sala de Estudo de LEMAC - Pavilhão de Matemática</h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">10/80 lugares ocupados</p>

            <p className="text-gray-600">Maior ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">06h00 - 20h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Apenas para estudantes de LEMAC e de LEFT</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">4/6</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">35 minutos</p>
          </div>

        </div>
      </section>



      <section className="mt-12 mb-12 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Biblioteca do Central - Pavilhão Central</h2>
        <div className="space-x-10">
        <li className="flex justify-center m-5 ">
        <button href="#" className={` mr-5 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold ${focusClass}   `}onClick={(handleClick)}>{text}</button>
        <Link href="/reviews/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6  rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out ">Review</Link>
        </li>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">100/204 lugares ocupados</p>

            <p className="text-gray-600">Maior ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">06h00 - 18h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Apenas para estudantes</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>



            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">4/6</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">61 minutos</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ISTstudy;
