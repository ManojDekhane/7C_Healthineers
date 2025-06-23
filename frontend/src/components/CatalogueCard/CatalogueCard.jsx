import React from 'react'

const CatalogueCard = ({ card1, card2 }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-white shadow-lg rounded-2xl">
      <div className="w-full md:w-1/2">
        <img
          src={card1}
          alt="Catalogue Item 1"
          loading='lazy'
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2">
        <img
          src={card2}
          alt="Catalogue Item 2"
          loading='lazy'
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}

export default CatalogueCard