import React from "react";

const CatalogueCard = ({ card1, card2 }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-white shadow-lg rounded-2xl">
      <div className="group w-full md:w-1/4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl active:scale-105">
        <img
          src={card1}
          alt="Catalogue Item 1"
          className="w-full h-auto object-cover rounded-lg group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300"
        />
      </div>

      <div className="group w-full md:w-1/4 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl active:scale-105">
        <img
          src={card2}
          alt="Catalogue Item 2"
          className="w-full h-auto object-cover rounded-lg group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default CatalogueCard;
