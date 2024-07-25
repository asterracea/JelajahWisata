import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Explore from './Explore.jsx';
import PopularPlaces from './PopularPlaces.jsx';

function Home() {
  const slides = [
    { url: 'src/assets/atsiri.jpg' },
    { url: 'src/assets/grojogan.jpg' },
    { url: 'src/assets/cetho.jpg' },
    { url: 'src/assets/kemuning.jpg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [category, setCategory] = useState("all");

  const menuItems = [
    { image: 'src/assets/balekambang.jpg', label: 'Taman Wisata' },
    { image: 'src/assets/sukuh.jpg', label: 'Candi' },
    { image: 'src/assets/sarangan.jpg', label: 'Telaga' },
    { image: 'src/assets/grojogan.jpg', label: 'Air Terjun' },
    { image: 'src/assets/mongkrang.jpg', label: 'Bukit' },
  ];

  return (
    <div className='max-w-[1400px] mx-auto h-auto py-12 px-4 relative'>
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[500px] rounded-2xl bg-center bg-cover duration-500 relative'>
        
        {/* Icon kiri */}
        <div className='absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer'>
          <HiChevronLeft onClick={prevSlide} size={30} />
        </div>

        {/* Icon kanan */}
        <div className='absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer'>
          <HiChevronRight onClick={nextSlide} size={30} />
        </div>

        {/* Teks dalam */}
        <div className="absolute  items-center justify-center p-4 bottom-16 left-4 rounded-lg bg-black/20 backdrop-blur-sm max-w-[400px] w-full ">
          <h1 className="text-2xl md:text-3xl font-bold !leading-[4rem] md:!leading-[2rem] text-white capitalize">
            Ayo Berwisata sekarang 
          </h1>
          <h2 className='text-2xl md:text-3xl font-bold text-white'>dan kunjungi tempat-tempat baru dan indah.</h2>
        </div>
      </div>

      <div className='mt-8'>
        <Explore category={category} setCategory={setCategory}/>
      </div>
      <div>
        <PopularPlaces/>
      </div>
    </div>

  );
}

export default Home;
