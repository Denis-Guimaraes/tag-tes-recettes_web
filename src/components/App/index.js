// NPM import
import React from 'react';

// Local import
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';
import Main from 'src/containers/Main';
import Footer from 'src/components/Footer';

// Styles
import './app.scss';

// Code
const App = () => (
  <div className="app">
    <Header />
    <div className="app-wrapper">
      <Nav />
      <Main />
    </div>
    <Footer />
  </div>
);

// Export
export default App;
