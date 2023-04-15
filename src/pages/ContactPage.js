import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function ContactPage() {
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
       

    {/* Footer */}
  <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="flex justify-between items-center mb-8">
      <div>
        <a href="/" className="text-3xl font-bold text-indigo-500">QWatch</a>
        <p className="text-gray-600">Made with ❤️ by Roadtrip To Coimbra</p>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li><a href="#"><i className="fab fa-facebook fa-lg"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter fa-lg"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram fa-lg"></i></a></li>
        </ul>
      </div>
    </div>
    <p className="text-gray-600 text-center">© 2023 QWatch. All rights reserved.</p>
  </footer>
</div>
);
}

export default ContactPage;
