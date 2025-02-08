import React from "react";
import { useParams } from "react-router-dom";

import ProductSubCategoryCard from "../../../components/ProductSubCategory/ProductSubCategoryCard";

import productData from "../../../productData";

const ProductSubCategoryPage = () => {
    const { categoryName } = useParams();
    const decodedCategoryName = decodeURIComponent(categoryName);

    const category = productData.find((cat) => cat.category === decodedCategoryName);

    if (!category) return <h2 className="text-center text-2xl font-semibold text-gray-800 mt-10">Category Not Found</h2>;

    return (
        <>
            {/* Subcategory Grid */}
            <div className="pt-44 px-4 sm:px-6 md:px-12 pb-20">
                <h1 className="text-center text-4xl font-bold text-sky-700 mb-10">
                    {category.category}
                </h1>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    {category.subCategories.map((sub, index) => (
                        <ProductSubCategoryCard key={index} image={sub.image} title={sub.name} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductSubCategoryPage;
