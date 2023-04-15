import React, { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import StudyPage from './pages/StudyPage';
import CantinePage from './pages/CantinePage';
import ContactPage from './pages/ContactPage';
import ISTcanteen from './pages/canteens/ISTcanteen';
import FCTcanteen from './pages/canteens/FCTcanteen';
import UCcanteen from './pages/canteens/UCcanteen';
import ISTstudy from './pages/study/ISTstudy';

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
    else if (path === '/canteen') {
      setCurrentPage('canteen');
    }
    else if (path === '/contact') {
      setCurrentPage('contact');
    }
    else if (path === '/ISTcanteen') {
      setCurrentPage('ISTcanteen');
    }
    else if (path === '/FCTcanteen') {
      setCurrentPage('FCTcanteen');
    }
    else if (path === '/UCcanteen') {
      setCurrentPage('UCcanteen');
    }
    else if (path === '/ISTstudy') {
      setCurrentPage('ISTstudy');
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
    else if (currentPage === 'canteen') {
      return <CantinePage />;
    }
    else if (currentPage === 'contact') {
      return <ContactPage />;
    }
    else if (currentPage === 'ISTcanteen') {
      return <ISTcanteen />;
    }
    else if (currentPage === 'FCTcanteen') {
      return <FCTcanteen />;
    }
    else if (currentPage === 'UCcanteen') {
      return <UCcanteen />;
    }
    else if (currentPage === 'ISTstudy') {
      return <ISTstudy />;
    }

  
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
