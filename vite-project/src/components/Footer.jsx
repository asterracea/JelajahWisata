import React from 'react'

function Footer() {
  return (
    <div>
      <footer
        className="flex flex-col shadow-2xl items-center bg-[#608BB7] text-center text-surface text-white lg:text-left">
        <div className="container p-6">
            <div className="grid gap-4 lg:grid-cols-2">
            <div className="mb-6 md:mb-0">
            <h5 className="mb-2 font-medium  text-yellow-300 uppercase">Informasi</h5>

                <p className="mb-4 text-gray-900">
                Jelajah Wisata adalah platform yang menyediakan informasi terkini dan terpercaya mengenai tempat-tempat wisata di Sekitar Kota Magetan. Temukan keindahan alam, sejarah, dan budaya nusantara.
                </p>
            </div>

            <div className="mb-6 md:mb-0">
                <h5 className="mb-2 font-medium  text-yellow-300 uppercase">Kontak kita</h5>
                <p className=' text-gray-900'>jelajahwisata.com</p>
                <p className='mb-4 text-gray-900'>+62 821-1826-5757</p>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer
