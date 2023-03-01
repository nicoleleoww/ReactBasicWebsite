import React from 'react';
import './App.css';
import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { Contact } from './components/Contact.jsx'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
