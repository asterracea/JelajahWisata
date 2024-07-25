import React from 'react'

function Explore({category,setCategory}) {
    const menuItems = [
        { image: 'src/assets/balekambang.jpg', label: 'Taman Wisata' },
        { image: 'src/assets/sukuh.jpg', label: 'Candi' },
        { image: 'src/assets/sarangan.jpg', label: 'Telaga' },
        { image: 'src/assets/grojogan.jpg', label: 'Air Terjun' },
        { image: 'src/assets/mongkrang.jpg', label: 'Bukit' },
      ];
  return (
    <div className=''>
        {/* <h1 className='text-2xl md:text-3xl font-semibold leading-tight text-blue-300'>Jelajahi Tempat Baru</h1>
        <p className='md:text-xl font-bold text-blue-300'>Ayo pilih berdasarkan jenis tempat yang ingin dikunjungu!</p> */}
      <div className="flex space-x-4 gap-6 items-center justify-center overflow-x-auto p-4">
        
      {menuItems.map((item, index) => (
        <div onClick={()=>setCategory(prev=>prev===item.label?"All":item.label)} key={index} className="flex flex-col items-center">
            <img src={item.image} alt={item.label}  className={category===item.label? "w-16 h-16 md:w-28 md:h-28 rounded-full object-cover ring-4 ring:gap-3 ring-black" : "w-16 h-16 md:w-28 md:h-28 rounded-full object-cover"}  />
            <span className="mt-2 text-gray-700 text-xs md:text-lg">{item.label}</span>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Explore
