import React from 'react';
import Heroo from './components/hero';
import Navbar from "./components/navbar";
import Locations from './components/locations';
import Testimonials from './components/testimonials';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heroo/>
      <Locations/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
