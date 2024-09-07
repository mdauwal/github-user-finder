import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Layout/Home';
import Contact from './Components/Layout/Contact';
import LoginForm from './Components/Layout/LoginForm';
import Signup from './Components/Layout/Signup';
import Privacy from './Components/Layout/Privacy';
import Footer from "./Components/Layout/Footer";
import About from "./Components/Layout/About";
import Not from "./Components/Layout/Not";
import { GithubProvider } from "./Components/Context/GithubContext";



function App() {
  return (
    
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<LoginForm/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/privacy' element={<Privacy/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/not-found' element={<Not/>} />
            <Route path='/*' element={<Not/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
