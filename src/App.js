import React from 'react';
import Header from '../src/Components/Header';
import Hero from '../src/Components/Herosection';
import Footer from '../src/Components/Footer';
import Secondsection from './Components/Secondsection';
import Thirdsection from './Components/Thirdsection';
import HowItWorks from './Components/HowWorks';
import './index.css'

const App = () => {
  return (
    <div className='poppins-regular'>
      <Header />
      <Hero />
      <Secondsection/>
      <Thirdsection/>
      <HowItWorks/>
      <Footer />
    </div>
  );
};

export default App;
