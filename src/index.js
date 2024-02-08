import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Container from './components/Container';
import Spotlight from './components/Spotlight';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container>
    <Spotlight />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
