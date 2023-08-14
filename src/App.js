import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import Tour from "./routes/Tours/Tour";

export default function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/tour" element={<Tour/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}
