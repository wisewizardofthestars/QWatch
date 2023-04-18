import Link from 'next/link';

function MainPage() {
  return (
    <div className="bg-gray-100">


      {/* Hero section */}
      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to QWatch!</h1>
        <p className="text-lg mb-8">Don't wait for success, QWatch it happen.</p>
        <Link href="/login" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Join the Q</Link>
      </section>

      {/* Features section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">What are we?</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
        <div className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow hover:transform hover:scale-105 transition duration-300">            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Find the Perfect Study Spot</h3>
            <p className="text-gray-600">Are you tired of wandering around your university campus, searching for a quiet study room or a spot in the library to work on your assignments? Look no further than QWatch! Our comprehensive WebApp and MobileApp enables you to quickly check the availability of study rooms in your college, allowing you to find the perfect spot to focus and be productive.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow hover:transform hover:scale-105 transition duration-300">            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Don't Let Hunger Distract You</h3>
            <p className="text-gray-600">Do you often find yourself spending valuable time standing in long queues at the university canteen, only to find out that you don't have enough time to eat before your next class? Say goodbye to those frustrating moments with QWatch. With QWatch, you don't have to let hunger distract you from your studies. You can plan your meals ahead and avoid long queues, ensuring that you have enough time to eat and arrive at your next destination on time.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1 hover:shadow hover:transform hover:scale-105 transition duration-300">            <i className="fas fa-laptop text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Get More Done in Less Time</h3>
            <p className="text-gray-600">With QWatch, you can get more done in less time. Our app streamlines your study routine, helping you find the best place to study and eat, and allowing you to connect with like-minded individuals to collaborate with. Don't let the lack of time hold you back. Download QWatch today and take the first step towards a more productive and efficient day.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
        <p className="text-lg mb-8">Don't wait for success, QWatch it happen.</p>
        <Link href="/login" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold transition duration-300 ease-in-out hover:text-white hover:bg-gray-500 hover:shadow-lg transform hover:scale-105">Join the Q</Link>
      </section>


    </div>
  );
}

export default MainPage;

