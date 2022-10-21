import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomepageList from './components/homepage/HomepageList';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <HomepageList />
    </Router>
  );
}

export default App;
