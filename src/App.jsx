import React from 'react';
import './App.css';
import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Portfolio } from './components/Portfolio.jsx'
import { Contact } from './components/Contact.jsx'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
