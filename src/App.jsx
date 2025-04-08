import './App.css';
import { useState } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import HydraulicsInfo from './components/HydraulicsInfo';
import SpecialistHydraulicsService from './components/SpecialistHydraulicsService';
import Banner from './components/Banner';
import ShowImages from './components/ShowImages';
import googleMap from './assets/googlemap.jpg'
import GoogleMapRedirect from './components/GoogleMapRedirect';

function App() {
  const [activeItem, setActiveItem] = useState(3);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='p-2 min-h-screen'>
      <Header />
      <div>
      <ul className="flex md:gap-6 cursor-pointer mb-6 w-full justify-center">
  <li
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      activeItem === 3 ? 'text-teal-600 font-semibold bg-teal-100' : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
    } uppercase font-bold`}
    onClick={() => handleItemClick(3)}
  >
    Home
  </li>
  <li
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      activeItem === 0 ? 'text-teal-600 font-semibold bg-teal-100' : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
    } uppercase font-bold`}
    onClick={() => handleItemClick(0)}
  >
    Contact
  </li>
  <li
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      activeItem === 1 ? 'text-teal-600 font-semibold bg-teal-100' : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
    } uppercase font-bold`}
    onClick={() => handleItemClick(1)}
  >
    About
  </li>
  <li
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      activeItem === 2 ? 'text-teal-600 font-semibold bg-teal-100' : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
    } uppercase font-bold`}
    onClick={() => handleItemClick(2)}
  >
    Images
  </li>
</ul>


        <div>
          {activeItem === 0 && <><Cards /> <GoogleMapRedirect /></>}
          {activeItem === 1 && <HydraulicsInfo/>}
          {activeItem === 2 && (
            <ShowImages/>
          )}
          {activeItem === 3 && (
            <>
              <Banner setActiveItem={setActiveItem} />
              <SpecialistHydraulicsService />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
