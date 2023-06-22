import React from 'react';
import './App.css';
import Home from './Pages/Home.js'
import Offers from './Pages/Offers.js'
import About from './Pages/About.js'
import Men from './Pages/Men.js'
import Women from './Pages/Women.js'
import Kids from './Pages/Kids.js'
import Sport from './Pages/Sport.js'
import Contact from './Pages/Contact'
import NavBar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Offers' exact Component={Offers} />
          <Route path='/Men' exact Component={Men} />
          <Route path='/Women' exact Component={Women} />
          <Route path='/Kids' exact Component={Kids} />
          <Route path='/Sport' exact Component={Sport} />
          <Route path='/About' exact Component={About} />
          <Route path='/Contact' exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;



