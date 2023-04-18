import React, { useState, useEffect } from 'react';
import MainPage from '../components/MainPage';
import UserPage from './profile';
import StudyPage from './study';
import CanteensPage from './canteens';
import ContactPage from './contacts';
import ISTcanteen from './canteens/ISTcanteen';
import FCTcanteen from './canteens/FCTcanteen';
import UCcanteen from './canteens/UCcanteen';
import ISTstudy from './study/ISTstudy';
import ISTreviewStudy from './reviews/ISTreviewStudy';

function App() {
  
  return (
      <MainPage />
  );
}

export default App;
