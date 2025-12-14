import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Prahlad Siwakoti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
