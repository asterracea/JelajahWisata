import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white text-white">
      <div className="text-center py-8">
      <h1 className="text-3xl font-bold mb-8 text-[#608BB7]">Hubungi Kami</h1>
      </div>

      <div className='py-44'>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-300">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-4xl mb-4 text-yellow-500" />
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Alamat</h3>
          <p className='text-black'>Kantor Jelajah Wisata,<br />Jalan Raya Tawangmangu No. 105,<br />Jawa Tengah - Indonesia</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-4xl mb-4 text-yellow-500" />
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Email</h3>
          <p className='text-black'>jelajahwisata.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhone className="text-4xl mb-4 text-yellow-500" />
          <h3 className="text-xl font-bold text-yellow-500 mb-2">Contacts info</h3>
          <p className='text-black'>+62 821-1826-5757</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
