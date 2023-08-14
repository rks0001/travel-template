import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import aboutImg from '../assets/night.jpg'
import Services from "../components/Services";
function Service() {
  return (
    <>
   
         <Hero
      cName="hero-mid"
      heroImg={aboutImg}
      title="Services"
      
      btnClass="hide"
      />
      <Services/>
      <Trip/>
    </>
  );
}

export default Service;
