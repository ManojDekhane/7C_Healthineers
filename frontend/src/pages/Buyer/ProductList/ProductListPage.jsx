import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../../productData";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Helmet } from "react-helmet-async";

const ProductListPage = () => {
    const { subcategoryName } = useParams();
    console.log("SubcategoryName:", subcategoryName);
    const decodedSubcategoryName = decodeURIComponent(subcategoryName);

    let selectedCategory = null;
    let selectedProducts = [];

    productData.forEach((category) => {
        const subcategory = category.subCategories.find((sub) => sub.name === decodedSubcategoryName);
        if (subcategory) {
            selectedCategory = category.category;
            selectedProducts = subcategory.products || []; // ✅ Ensure it's always an array
        }
    });

    if (!selectedProducts || selectedProducts.length === 0) { // ✅ Prevent undefined errors
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <h2 className="text-2xl font-bold text-gray-800 mt-10">We're updating our inventory. Please check again soon!</h2>
            </div>
        );
    }

    return (
        <div className="pt-44 px-4 sm:px-6 md:px-12 pb-16">
            <Helmet>
                <title>{decodedSubcategoryName} | Products | Seven C Healthineers</title>
                <meta
                    name="description"
                    content={`Discover top-quality medical equipment under the ${decodedSubcategoryName} subcategory.`}
                />
                <meta
                    name="keywords"
                    content={`${decodedSubcategoryName}, Medical Products, Seven C Healthineers`}
                />
                <meta
                    property="og:title"
                    content={`${decodedSubcategoryName} | Medical Products | Seven C Healthineers`}
                />
                <meta
                    property="og:description"
                    content={`Explore our product range in ${decodedSubcategoryName}, trusted by healthcare professionals.`}
                />
                <meta property="og:type" content="product.group" />
                <meta
                    property="og:url"
                    content={`https://www.7chealthineers.com/subcategory/${encodeURIComponent(subcategoryName)}`}
                />
                <link
                    rel="canonical"
                    href={`https://www.7chealthineers.com/subcategory/${encodeURIComponent(subcategoryName)}`}
                />
            </Helmet>

            <h1 className="text-center text-4xl font-bold text-sky-700 mb-10">
                {decodedSubcategoryName}
            </h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 justify-center">
                    {selectedProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            name={product.name}
                            category={selectedCategory}
                            subCategory={decodedSubcategoryName}
                            brochureLink={product.brochureLink || null}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
