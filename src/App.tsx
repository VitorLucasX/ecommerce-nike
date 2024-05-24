import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Appstore from "./components/Appstore/Appstore";
import Avaliation from "./components/Avaliation/Avaliation";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <Appstore />
        <Avaliation />
        <Footer />
      </div>
    </>
  );
}

export default App;
