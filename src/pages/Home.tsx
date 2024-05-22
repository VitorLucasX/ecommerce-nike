import About from "../components/About";
import Avaliation from "../components/Avaliation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Offer />
      <Avaliation />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
