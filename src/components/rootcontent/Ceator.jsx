import React, { useState } from "react";

const Creator = () => {
  // Data foto dan link Instagram
  const photos = [
    {
      id: "syarif",
      image: "/foto/syarif.jpg",
      caption: "Muhamad Syarif Nurrohman sebagai Backend developer, Seorang siswa di SMKN 1 CIMAHI di jurusan SISTEM INFORMASI JARINGAN DAN APLIKASI dan sebagai pemimpin di dalam project",
      instagramLink: "https://www.instagram.com/syarif",
    },
    {
      id: "adel",
      image: "/foto/adel.jpg",
      caption: "Adelya Octaviani",
      instagramLink: "https://www.instagram.com/adel",
    },
    {
      id: "revy",
      image: "/foto/revy.jpg",
      caption:
        "Muhammad Revy Rizqy P. gggggggggggggggggggggggggggggggggggggggggyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      instagramLink: "https://www.instagram.com/revy",
    },
  ];

  const [activePhoto, setActivePhoto] = useState(photos[0].id); // Default foto pertama (syarif) terbuka

  const handlePhotoClick = (photoId, instagramLink) => {
    if (activePhoto === photoId) {
      // Jika foto yang aktif diklik lagi, redirect ke Instagram
      window.location.href = instagramLink;
    } else {
      // Set foto yang diklik sebagai aktif
      setActivePhoto(photoId);
    }
  };

  return (
    <div className="container-creator" id="creator">
      <div className="bg-content-creator">
        {/* <div class="ling-karan"></div>
        <div class="ling-karan-sk"></div>
        <div class="ling-karan-sk1"></div>
        <div class="ling-karan2"></div>
        <div class="ling-karan3"></div>
        <div class="ling-karan4"></div> */}
        <div className="content-creator">
          <div className="text-creator">
            <p>
            Kami merupakan siswa dan siswi SMK Negeri 1 Cimahi yang sedang dalam proses pemenuhan tugas produk kreatif kewirausahaan khususnya dalam membangun aplikasi berbasis web dengan mengedepankan kebermanfaatan bagi lingkup sekitar.
            </p>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
          <h1 className="title-creator">Creator</h1>
          <div className="photos-creator">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={`photo-creator ${
                  activePhoto === photo.id ? "active-creator" : ""
                }`}
                onClick={() => handlePhotoClick(photo.id, photo.instagramLink)}
              >
                <img
                  src={photo.image} // Path gambar
                  alt={photo.caption}
                  className="image-creator"
                />
                <div className="caption-creator">
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
