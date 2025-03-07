import React, { useEffect } from "react";
import feather from "feather-icons";
import Creator from "./rootcontent/Ceator";
import Hero from "./rootcontent/hero";
import About from "./rootcontent/about";
import Navbar from "./subcomponent/Navbar";
import Footer from "./subcomponent/Footer";
const Root = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Creator />
      <Footer />
    </div>
  );
};

export default Root;
