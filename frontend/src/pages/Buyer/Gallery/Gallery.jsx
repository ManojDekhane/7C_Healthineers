import React from 'react';
import productData from '../../../productData';

const Gallery = () => {
    const images = productData.flatMap(category =>
        category.subCategories?.flatMap(sub =>
            sub.products?.filter(product => product.image).map(product => product.image) || []
        ) || []
    );

    return (
        <div className="container mx-auto p-6 mt-28">
            <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 mt-35 p-10">Product Gallery</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        className="border rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        <img 
                            src={img} 
                            alt={`Product ${index}`} 
                            className="w-full h-auto object-cover aspect-[4/3]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
