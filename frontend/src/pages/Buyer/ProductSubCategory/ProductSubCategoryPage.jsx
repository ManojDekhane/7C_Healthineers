import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ProductSubCategoryCard from "../../../components/ProductSubCategory/ProductSubCategoryCard";

import productData from "../../../productData";

const ProductSubCategoryPage = () => {
    const { categoryName } = useParams();
    const decodedCategoryName = decodeURIComponent(categoryName);

    const category = productData.find((cat) => cat.category === decodedCategoryName);

    if (!category) return <h2 className="text-center text-2xl font-semibold text-gray-800 mt-10">Category Not Found</h2>;

    return (
        <>
            <Helmet>
                <title>{decodedCategoryName} | Product Category | Seven C Healthineers</title>
                <meta
                    name="description"
                    content={`Explore ${decodedCategoryName} equipment and solutions offered by Seven C Healthineers LLP.`}
                />
                <meta
                    name="keywords"
                    content={`${decodedCategoryName}, Medical Equipment, Healthcare Solutions, Seven C Healthineers`}
                />

                <meta property="og:title" content={`${decodedCategoryName} | Product Category | Seven C Healthineers`} />
                <meta
                    property="og:description"
                    content={`Browse all subcategories under ${decodedCategoryName} — cutting-edge medical and diagnostic tools.`}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`https://www.7chealthineers.com/category/${encodeURIComponent(categoryName)}`}
                />
                <link
                    rel="canonical"
                    href={`https://www.7chealthineers.com/category/${encodeURIComponent(categoryName)}`}
                />
            </Helmet>


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
