import React, { useState } from 'react';
import Detail from './Detail';

const destinations = [
  {
    name: 'Museum Atsiri Indonesia',
    img: 'src/assets/atsiri.jpg',
    description: 'Rumah Atsiri merupakan wisata edukasi tentang edukasi tentang pembuatan minyak esensial dari tanaman atsiri, yang terletak di jl. Watusambang, Plumbon, Kecamatan Tawangmangu, Kabupaten Karanganyar, Jawa Tengah. Rumah Atsiribuka dari jam 10.00-17.00 WIB setiap hari termasuk hari libur nasional.Harga tiket masuk untuk wisatawan lokal dan mancanegara berkisarRp50.000,- per orang. Rumah Atsirimemiliki fasilitas meliputi MICE butik, sejumlah atraksi, fasilitas seperti kebun tanaman atsiri, fasilitas laboratorium, rumah produksi, pusat pelatihan, restoran, toko, glamping, museum, area parkir, toilet dan mushola.',
  },
  {
    name: 'Candi Cetho',
    img: 'src/assets/cetho.jpg',
    description: 'Candi Cetho merupakan wisata Budaya yang terletak di di Dusun Ceto, Desa Gumeng, Kecamatan Jenawi, Kabupaten Karanganyar, Jawa Tengah. Candi Cetho buka dari jam 08.00 – 17.00 WIB. Untuk dapat masuk ke Candi Cetho wisatawan cukup membayar tiket masuk untuk wisatawan lokal sebesar Rp.10.000,- dan untuk wisatawan mancanegara sebesar Rp. 30.000,-. Untuk tiket masuk Candi Cetho sudah menggunakan E-Ticketing. Beberapa fasilitas yang tersedia seperti toilet, mushola, toko oleh – oleh dan cindera mata, dan area parkir. ',
  },
  {
    name: 'Air Terjun Grojogan Sewu',
    img: 'src/assets/grojogan.jpg',
    description: 'Air Terjun Grojogan Sewu merupakan wisata Alam yang terletak di Jl. Raya Tawangmangu, Beji, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792. Air Terjun Grojogan Sewu  buka dari jam 08.00 – 16.00 WIB. Harga tiket masuk untuk wisatawan lokal sebesar Rp.22.000,- adapun wisatawan mancanegara Rp.150.000,- di hari kerja dan Rp.175.000,- pada saat weekand. Di Air Terjun Grojogan Sewu memiliki fasilitas meliputi Warung makan, Gazebo, Area Bermain, Mushola, Kolam Renang, Toilet, Tempat Parkir, Toko Oleh-Oleh dan Cinderamata.',
  },
  {
    name: 'Kebun Teh Kemuning',
    img: 'src/assets/kemuning.jpg',
    description: 'Kebun teh kemuning merupakan wisata alam yang terletak di Ngargoyoso, Kabupaten Karanganyar. Adapun fasilitas yang tersedia yaitu tempat parkir, warung, rumah makan dan juga terdapat spot foto yang menarik. ',
  },
  {
    name: 'Bukit Mongkrang',
    img: 'src/assets/mongkrang.jpg',
    description: 'Bukit Mongkrang merupakan wisata Alam berupa kegiatan pendakian yang cocok bagi pemula terletak di Tlogodringo desa Gondosulu Tawangmangu Karanganyar. Bukit Mongkrang buka dari jam 07.00 – 22.00 WIB. Harga tiket masuk untuk wisatawan lokal maupun tiket masuk wisatawan mancanegara Rp.15.000,- bagi yang menghendaki camping, apabila tidak wisatawan cukup membayar Rp. 10.000,-. Bukit Mongkrang memiliki beberapa fasilitas meliputi tempat parkir, lahan camping, warung, toilet, mushola, penyewaan alat camping selain itu wisatawan akan disuguhkan pemandangan yang menajubkan.',
  },
  {
    name: 'Air Terjun Jumog',
    img: 'src/assets/jumog.jpg',
    description: 'Air Terjun Jumog merupakan wisata Alam yang terletak di Taman batu tiban, Jl. Jumog, Gandu, Berjo, Kec. Ngargoyoso, Kabupaten Karanganyar, Jawa Tengah 57793. Air Terjun Jumog  buka dari jam 08.00 – 16.00 pada saat weekday dan jam 08.00 -17.30 pada saat weekand. Harga tiket masuk untuk wisatawan lokal maupun wisatawan mancanegara Rp.15.000,-. Di Air Terjun Jumog memiliki fasilitas meliputi Warung makan, Gazebo, Area Bermain, Mushola, Kolam Renang, Live Music, Toilet, Tempat Parkir, Aula, Toko Oleh-Oleh dan Cinderamata.',
  },
  {
    name: 'Bukit Sekipan',
    img: 'src/assets/sekipan.jpg',
    description: 'Bukit Sekipan Kampung Halloween merupakan wisata buatan yang berada diKalisoro, Kec. Tawangmangu, Kabupaten Karanganyar. Wisata ini buka setiap hari mulai pukul 08.00-17.00 WIB saat Weekday dan pukul 08.00-18.00 WIB saat Weekend. Beberapa fasilitas disediakan ditempat ini seperti Miniatur Landmark Dunia, Mini Coaster, Studio Foto Lengkap, Miniatur Kapal Titanic, Jembatan Goyang Seru, Tempat hantu, spot foto rumah adat, small room, villa, cottage Jepang hingga titanic room, tempat makan, mushola dan toilet bersih, tempat parkir, tempat outbound. letaknya yang berada dipegunungan tentunya memberikan hawa yang sejuk dan pemandangan alam yang indah.',
  },
  {
    name: 'Candi Sukuh',
    img: 'src/assets/sukuh.jpg',
    description: 'Candi Sukuh adalah Candi Hindu yang merupakan salah satu wisata Budaya di Kabupaten Karanganyar yang terletak di Tambak, Berjo, Kec. Ngargoyoso, Kabupaten Karanganyar, Jawa Tengah 57793. Jam operasional Candi Sukuh buka pada jam 07.00 – 17.00 WIB. Wisatawan lokal cukup membayar Rp.10.000,-/orang dan Rp.30.000,-/oang untuk Wisatawan  mancanegara. Beberapa fasilitas tersedia di sekitar Candi Sukuh meliputi tempat parkir, mushola, toilet, penjual cinderamata/ oleh – oleh, dan pendopo. Selain fasilitas tersebut hawa yang sejuk dan pemandangan yang indah dari ketinggian senantiasa menambah indahnya berwisata di Candi Sukuh.',
  },
  {
    name: 'Telaga Sarangan',
    img: 'src/assets/sarangan.jpg',
    description: 'Tanjung Kelayang is known for its scenic beaches and unique granite rock formations.',
  },
  {
    name: 'Telaga Wahyu',
    img: 'src/assets/telagawhyu.jpg',
    description: 'Morotai Island is an island and a regency in the Halmahera group of eastern Indonesia\'s Maluku Islands.',
  },
  {
    name: 'Taman Balekambang',
    img: 'src/assets/balekambang.jpg',
    description: 'New Balekambang Tawangmangu merupakan salah satu wisata buaan yang terletak di Jl. Balaikambang, Kalisoro, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792. Wisata ini buka pukul 09.00-17.00 WIB dengan harga tiket masuk sebesar Rp 20.000,-. New Balekambang Tawangmangu memiliki fasilitas lain berupa toilet, tempat parkir, mushola, dan area rerumputan untuk bersantai.',
    },
  {
    name: 'Air Terjun Parang Ijo',
    img: 'src/assets/parangijo.jpg',
    description: 'Air terjun parang ijo merupakan wisata alam yang terletak di Kecamatan Ngargoyoso, Kabupaten Karanganyar. Wisata ini memiliki berbagai macam fasilitas seoerti tempat parkir, warung makan, spot foto menarik, toilet, mushola dan juga loket. Jam operasional wisata ini mulai dari pukul 07.30 sampai dengan 17.00.',
  },
  {
    name: 'Taman Sakura Hills',
    img: 'src/assets/sakura.jpg',
    description: 'Taman Sakura Hills Tawangmangu merupakan salah satu wisata alam yang memadukan konsep alam ala negara Jepang dengan pesona Gunung Lawu yang terletak di Jalan Tawangmangu–Magetan, Kecamatan Tawangmangu, Kabupaten Karanganyar. Taman Sakura Hills Tawangmangu buka setiap hari mulai pukul 08.00-16.00 WIB. Harga tiket masuk untuk wisatawan lokal dan mancanegara untuk weekday dewasa Rp.20.000, untuk weekend dewasa Rp.25.000 anak- anak Rp.15.000 per orang. Taman Sakura Hills Tawangmangu memiliki fasilitas yang cukup lengkap meliputi, area berfoto, cinema 3D, tempat penyewaan mobil jeep, perahu, dan kimono, penginapan, restoran, mushola, toilet dan lahan parkir yang luas.',
  },
  {
    name: 'The Lawu Park',
    img: 'src/assets/lawupark.jpg',
    description: 'The Lawu Park merupakan wisata buatan di Kabupaten Karanganyar  terletak di Bulakrejo, Gondosuli Kidul, Gondosuli, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792. Buka dari jam 08.00 – 17.00 WIB. Harga tiket masuk untuk wisatawan lokal maupun mancanegara adalah Rp.20.000,- untuk weekday dan Rp.25.000,- untuk weekand dengan beberapa fasilitas yang disediakan untuk kenyamanan pengunjung antara lain Super Glamping, Glamping, Cotage, Snow park, Rabbit arena, Rumah pohon, Jembatan merah, Kolam Sendang Drajat, Outbound area, Wahana adventure, Agrowisata pertanian, dan Grojogan salju, Flying fox, Human Claw, Menunggangi kuda, ATV, Snow World, 3D Cinema, toilet, area parkir, mushola.',
  },
  {
    name: 'De Tjolomadoe',
    img: 'src/assets/tjolomadoe.jpg',
    description: 'De Tjolomadoe merupakan sebuah obyek wisata sejarah mengenai keberadaan Pabrik Gula Colomadu yang mulai dibangun pada tahun 1861 oleh Mangkunegoro IV, yang terletak di jl. Adi Sucipto No.1, Paulan Wetan, Malangjiwan, Kecamatan Colomadu, Kabupaten Karanganyar, Jawa Tengah. De Tjolomadoe buka setiap hari Selasa hingga Minggu, pukul 10.00-17.00 WIB. Harga tiket masuk untuk wisatawan local dan mancanegara berkisar Rp 35.000,-  per orang dan untuk pelajar mulai Rp 25.000,-. De Tjolomadoememiliki fasilitas wisata yang beragam, yaitu museum, merchandise shop, kafe, dan convention.',
  },
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleImageClick = (destination) => {
    setSelectedDestination(destination);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedDestination(null);
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-[#608BB7]">Destinasi Pilihan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick(destination)}
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-lg">
              {destination.name}
            </div>
          </div>
        ))}
      </div>
      {selectedDestination && (
        <Detail
          show={showDetail}
          onClose={handleCloseDetail}
          destination={selectedDestination}
        />
      )}
    </div>
  );
};

export default Destinations;
