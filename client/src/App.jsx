import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './assets/pages/Home';
import SignIn from './assets/pages/SignIn';
import SignUp from './assets/pages/SignUp';
import About from './assets/pages/About';
import Profile from './assets/pages/Profile';
import Header from './assets/components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} /> {/* Render Home component for the '/' route */}
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
