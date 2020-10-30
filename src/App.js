import React from 'react';

import Header from './components/header.js';
import About from './components/about.js';
import Resume from './components/resume.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
