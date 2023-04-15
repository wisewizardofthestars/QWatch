import React, { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import StudyPage from './pages/StudyPage';
import CantinePage from './pages/CantinePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/profile') {
      setCurrentPage('profile');
    }
    else if (path === '/study') {
      setCurrentPage('study');
    }
    else if (path === '/cantine') {
      setCurrentPage('cantine');
    }
    else if (path === '/contact') {
      setCurrentPage('contact');
    }
  }, []);

  const renderPage = () => {
    if (currentPage === 'main') {
      return <MainPage />;
    } else if (currentPage === 'profile') {
      return <UserPage />;
    }
    else if (currentPage === 'study') {
      return <StudyPage />;
    }
    else if (currentPage === 'cantine') {
      return <CantinePage />;
    }
    else if (currentPage === 'contact') {
      return <ContactPage />;
    }
  
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
