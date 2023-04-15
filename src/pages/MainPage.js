// import React from 'react';
// import "tailwindcss/tailwind.css";

// function MainPage() {
//   return (
//     <div className="bg-gray-100">
//       {/* Navigation */}
//       <nav className="flex justify-between items-center bg-white py-4 px-6 shadow-md">
//         <div>
//           <a href="#" className="text-3xl font-bold text-indigo-500">My Site</a>
//         </div>
//         <div>
//           <ul className="flex space-x-6 text-gray-600">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero section */}
//       <section className="bg-indigo-500 py-20 px-6 text-center text-white">
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
//         <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         <a href="#" className="bg-white py-3 px-6 rounded-full font-bold hover:bg-gray-200 transition duration-300 ease-in-out">Learn More</a>
//       </section>

//       {/* Features section */}
//       <section className="py-20 px-6">
//         <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
//         <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
//           <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
//             <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
//             <h3 className="text-xl font-bold mb-4">Web Development</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
//             <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
//             <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
//             <i className="fas fa-laptop text-indigo-500 text-4xl mb-4"></i>
//             <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA section */}
//       <section className="bg-indigo-500 py-20 px-6 text-center text-white">
//     <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
//     <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//     <a href="#" className="bg-white py-3 px-6 rounded-full font-bold hover:bg-gray-200 transition duration-300 ease-in-out">Contact Us</a>
//   </section>

//   {/* Footer */}
//   <footer className="bg-gray-900 text-white py-10 px-6">
//     <div className="flex justify-between items-center mb-8">
//       <div>
//         <a href="#" className="text-3xl font-bold text-indigo-500">My Site</a>
//       </div>
//       <div>
//         <ul className="flex space-x-6">
//           <li><a href="#"><i className="fab fa-facebook fa-lg"></i></a></li>
//           <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
//           <li><a href="#"><i className="fab fa-instagram fa-lg"></i></a></li>
//         </ul>
//       </div>
//     </div>
//     <p className="text-gray-600 text-center">© 2023 My Site. All rights reserved.</p>
//   </footer>
// </div>
// );
// }

// export default MainPage;

import React from 'react';

function MyPage() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
      <p className="text-gray-700 text-lg">This is a small example of a Tailwind page.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Click Me!
      </button>
    </div>
  );
}

export default MyPage;
