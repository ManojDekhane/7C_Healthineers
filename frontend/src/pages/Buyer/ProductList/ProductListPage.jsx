import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../../productData";
import ProductCard from "../../../components/ProductCard/ProductCard";

const ProductListPage = () => {
    const { subcategoryName } = useParams();
    const decodedSubcategoryName = decodeURIComponent(subcategoryName);

    let selectedProducts = [];

    productData.forEach((category) => {
        const subcategory = category.subCategories.find((sub) => sub.name === decodedSubcategoryName);
        if (subcategory) {
            selectedProducts = subcategory.products;
        }
    });

    if (selectedProducts.length === 0) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <h2 className="text-2xl font-bold text-gray-800">No Products Found</h2>
            </div>
        );
    }

    return (
        <div className="pt-44 px-4 sm:px-6 md:px-12 pb-16">
            <h1 className="text-center text-4xl font-bold text-sky-700 mb-10">
                {decodedSubcategoryName}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                {selectedProducts.map((product, index) => (
                    <ProductCard key={index} image={product.image} name={product.name} />
                ))}
            </div>

        </div>
    );
};

export default ProductListPage;
