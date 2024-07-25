import React from 'react';

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-[#608BB7] text-center">Sekilas Tentang Kami</h1>

      <div className="flex flex-col md:flex-row mb-8">
        <p className="font-bold md:mr-2">Pariwisata Indonesia</p>
        <p>merupakan salah satu sektor industri penghasil devisa terbesar nomor 2 di Indonesia dan menyerap hampir 6096 tenaga kerja sebagai pelaku wisata dalam berbagai bidang.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-left font-bold">Jelajah Wisata <span className='font-normal'>merupakan perusahaan pelayanan wisata yang beralamat di Jalan Raya Tawangmangu Nomor 105, Jawa Tengah, Indonesia. Jelajah Wisata merupakan sebuah sistem informasi untuk menyajikan, menyampaikan informasi, promosi kepariwisataan yang berada di area <span className='font-bold'>Tawangmangu dan Karanganyar, Jawa Tengah.</span>  </span></p>
        </div>
        <div>
          <p className="text-left">Tim kami terdiri dari individu yang kreatif, inovatif, berpengalaman serta selalu berorientasi pada kemajuan untuk pembaruan informasi tempat wisata yang ada di Tawangmangu dan Karanganyar Provinsi Jawa Tengah</p>
        </div>
        <div>
          <p className="text-left">Guna memenuhi kebutuhan akan informasi tentang wisata yang ada di sebagian kota di Jawa Tengah, kami memilih untuk membuatkan website <span className='font-bold'>Jelajah Wisata</span> yang bertujuan untuk memudahkan masyarakat dari dalam atau luar daerah bisa mengetahui lebih banyak mengenai informasi wisata di Karanganyar dan Tawangmangu ini. </p>
        </div>
        <div>
          <p className="text-left">Pemerintah Kabupaten Tawangmangu dan Karanganyar menyadari bahwa kekuatan terbesar dalam promosi adalah keterlibatan seluruh komponen masyarakat yang ada di Kabupaten ini. Oleh karena itu, strategi terbaik yang dapat dilakukan adalah melibatkan masyarakat untuk andil dalam pembuatan konten, review, dan lain-lain.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
