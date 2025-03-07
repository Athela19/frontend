import React, { useEffect, useState } from "react";
import codingImage from "../../img/coding.svg"; // Sesuaikan path gambar

const Hero = () => {
  const [scale, setScale] = useState(1.5); // Default besar (1.5)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(1.5 - scrollY / 500, 0.2); // Mengecil dari 1.5 ke min 0.2
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="circle-new">
    <section className="hero-edit" id="home">
      <div className="circle-hero" style={{ transform: `scale(${scale})` }}></div>
      <div className="circle-hero" style={{ transform: `scale(${scale})` }}></div>
      <div className="circle-hero" style={{ transform: `scale(${scale})` }}></div>
      <div className="hero-left">
        <h1>Find <span>Your Job</span></h1>
        <h1>Change <span>Your Life</span></h1>
        <p>Find your job based on your choice, with us.</p>
        <button className="btn-db">Join Now</button>
      </div>
      <div className="hero-right">
        <div className="hero-circle" style={{ transform: `scale(${scale})` }}></div>
        <img src={codingImage} alt="Coding Illustration" className="hero-image" />
      </div>
    </section>
    </div>
  );
};

export default Hero;