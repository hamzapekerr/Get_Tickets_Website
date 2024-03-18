import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Anasayfa from './components/pages/Anasayfa';
import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom';
import Ucak from './components/pages/Ucak';
import Otobus from './components/pages/Otobus';
import Sinema from './components/pages/Sinema';
import Tiyatro from './components/pages/Tiyatro';
import Konser from './components/pages/Konser';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/ucak" element={<Ucak />} />
          <Route path="/otobus" element={<Otobus />} />
          <Route path="/sinema" element={<Sinema />} />
          <Route path="/tiyatro" element={<Tiyatro />} />
          <Route path="/Konser" element={<Konser />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
