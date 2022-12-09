import React from 'react'
import Home from './Components/Home/Home';
import SignUp from './Components/Forms/SignUp';
import SignIn from './Components/Forms/SignIn';
import About from './Components/About/About';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



function App() {

  return (
    <div className="App">
      <div>

        <Router>
          <Header />
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/About' element={<About />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div >
  )
}

export default App;
