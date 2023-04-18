import React from 'react';

const universities = [
  { name: 'Instituto Superior Técnico - IST', imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/e/ed/IST_Logo.png' , short: 'IST'},
  { name: 'University of Lisbon - UL', imageUrl: 'data:image/png;base64,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', short:'UL' },
  { name: 'University of Coimbra - UC', imageUrl: 'https://times.ces.uc.pt/wp-content/uploads/UC_V_FundoClaro-negro.png', short:'UC' },
  { name: 'Nova School of Science and Technology - FCT', imageUrl: 'https://www.fct.unl.pt/sites/default/files/images/nova_4.png', short: 'FCT' },
  { name: 'Nova School of Business and Economics - NOVA SBE', imageUrl: 'https://cdn-images-1.medium.com/max/1200/1*NdHphBh8zRL5KewmgUQaDA.png', short: 'SBE' },
  { name: 'FEUP', imageUrl: 'https://seeklogo.com/images/U/universidade-do-porto-logo-945F5991DC-seeklogo.com.gif', short:'FEUP' },
];

const StudyUniversityList = () => {
    return (
      <div className="m-6 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8">Choose a University</h1>
        <div className="grid grid-cols-3 gap-4 ">
          {universities.map((university) => (
            <div key={university.name} className="p-4 bg-white rounded-lg shadow-md max-w-64 flex flex-col justify-center items-center">
              <img src={university.imageUrl} alt={university.name} className="m-4 h-48 object-cover mb-4 rounded-lg" />
              <h2 className="text-lg font-semibold">{university.name}</h2>
              <ul className="m-0 p-0">
                <li className="flex justify-center items-center">
                  <a href={`/${university.short}study`} className="m-4 text-black bg-indigo-300 py-3 px-6 rounded-full font-bold hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Select</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default StudyUniversityList;
