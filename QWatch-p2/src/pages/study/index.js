import React from 'react';
import StudyUniversityList from '../StudyUniversityList';
import Link from 'next/link';

function StudyPage() {
  return (
    <div className="bg-gray-100">

      {/* Main content */}
      <main>
        <StudyUniversityList />
      </main>


    </div>
  );
}

export default StudyPage;
