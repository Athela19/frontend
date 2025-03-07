import React from "react";
import { motion } from "framer-motion";
import chat from "../../img/work-chat.svg"; // Sesuaikan path jika perlu

const About = () => {
  return (
    <section id="about" className="about-edit">
      <motion.h2
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        <span>About</span> Us
      </motion.h2>
      <div className="row-edit">
        {/* Animasi Gambar dari Kiri */}
        <motion.div
          className="about-img-edit"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <img src={chat} alt="Tentang Kami" />
        </motion.div>

        {/* Animasi Teks dari Kanan */}
        <motion.div
          className="content-edit"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <p>
            Findjob is a web-based application designed to simplify the process
            of finding workers with an inclusive and flexible approach. This
            platform accepts workers based on their abilities without setting
            strict criteria, providing job opportunities for various groups,
            especially those with limited formal education.
          </p>
          <p>
            The platform is specifically targeted at individuals who often face
            challenges in securing jobs, such as those with only primary or
            secondary education or without formal certifications. With Findjob,
            they can showcase their practical skills—whether in manual labor,
            services, or simple technical tasks—without going through
            complicated selection processes.
          </p>
          <h4>
            Discover the opportunities that await and start building your future
            with Findjob today!
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
