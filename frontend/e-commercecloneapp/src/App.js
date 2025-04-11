// App.js
import React from 'react';
import Navbar from './components/Navbar';
// import SignUpForm from './components/SignUpForm';
import ImageSection from './components/ImageSection';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="flex flex-col md:flex-row min-h-screen items-start"> 
        <ImageSection />
        {/* <SignUpForm /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
