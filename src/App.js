import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Summary />
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
