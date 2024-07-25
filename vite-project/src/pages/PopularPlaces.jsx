import React from 'react'

const PopularPlaces = () => {
    const popularPlaces = [
        {
          image: 'src/assets/sarangan.jpg',
          name: 'Telaga Sarangan',
          description: 'Telaga Sarangan, Wisata Alam Seru dan Sejuk di Jawa Timur'       
        },
        {
          image: 'src/assets/atsiri.jpg',
          name: 'Rumah Atsiri',
          description: 'Kawasan wisata dengan tanaman aromatik, fasilitas laboratorium/penelitian, rumah produksi, pusat pelatihan, museum, restoran, toko dan butik'
        },
        {
          image: 'src/assets/cetho.jpg',
          name: 'Candi Cetho',
          description: 'Candi Cetho menawarkan pemandangan panorama indah, menjadikannya tujuan populer bagi wisatawan dan pencari spiritual.',
        },
        {
          image: 'src/assets/mongkrang.jpg',
          name: 'Bukit Mongkrang',
          description: 'Bukit Mongkrang merupakan salah satu bukit indah yang ada di kawasan Tawangmangu kabupaten Karanganyar Provinsi Jawa Tengah',
        },
      ];
  return (
    <div className='mt-8'>
      <h1 className='text-2xl md:text-3xl font-semibold leading-tight text-blue-300'>Tempat Populer</h1>
      <p className='md:text-xl font-bold text-blue-300'>Kunjungi tempat-tempat wisata yang populer!</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
        {popularPlaces.map((place, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img src={place.image} alt={place.name} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>{place.name}</h3>
              <p className='text-gray-600'>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularPlaces
