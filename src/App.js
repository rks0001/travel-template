import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";

import React from 'react';
// import MeghalayaTour from "./routes/Tours/MeghalayaTour";
import WhatsApp from "./components/WhatsApp";
import DesDetails from "./routes/Tours/DesDetails";


export default function App() {
  return (
    <div className="App">
    
        <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/explore-bali" element={<DesDetails/>}/>
      </Routes>
      <WhatsApp/>
      <Footer/>
     
    </div>
  );
}
