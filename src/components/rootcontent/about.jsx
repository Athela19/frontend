import React from "react";
import { motion } from "framer-motion";
import logo from "../../img/logo.png"; // Sesuaikan path jika perlu

const About = () => {
  return (
    <section id="about" className="about-edit">
      <motion.h2
        initial={{ y:100, opacity: 0 }}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        <span>Tentang</span> Kami
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
            <motion.img
              src={logo}
              alt="Tentang Kami"
              animate={{ y: [0, -20, 0] }} // Animasi naik turun
              transition={{
                duration: 2, // Durasi animasi
                repeat: Infinity, // Looping tanpa henti
                ease: "easeInOut", // Efek easing
              }}
            />
            <div className="about-circle" ></div> {/* Lingkaran */}
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
            Findjob adalah aplikasi berbasis web yang dirancang untuk memudahkan
            proses pencarian pekerja dengan pendekatan yang inklusif dan fleksibel.
            Platform ini menerima pekerja berdasarkan kemampuan mereka tanpa
            menetapkan kriteria yang ketat, sehingga memberikan kesempatan kerja
            bagi berbagai kelompok, terutama mereka yang memiliki pendidikan formal
            terbatas.
          </p>
          <p>
            Platform ini secara khusus ditujukan bagi individu yang sering menghadapi
            tantangan dalam mendapatkan pekerjaan, seperti mereka yang hanya
            memiliki pendidikan dasar atau menengah, atau tanpa sertifikasi formal.
            Dengan Findjob, mereka dapat menampilkan keterampilan praktis mereka 
            baik dalam pekerjaan manual, jasa, atau tugas teknis sederhana tanpa
            harus melalui proses seleksi yang rumit.
          </p>
          <p>
            Temukan peluang yang menanti dan mulailah membangun masa depan Anda
            bersama Findjob hari ini!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;