// import React from "react";
// import { Helmet } from "react-helmet-async";
// import productData from "../../../productData";
// import ProductCard from "../../../components/ProductCard/ProductCard";

// const AllProductsPage = () => {
//   // Prepare grouped structure
//   const groupedProducts = [];

//   productData.forEach((category) => {
//     category.subCategories.forEach((sub) => {
//       if (sub.products?.length) {
//         groupedProducts.push({
//           category: category.category,
//           subCategory: sub.name,
//           products: sub.products,
//         });
//       }
//     });
//   });

//   return (
//     <div className="pt-44 px-4 sm:px-6 md:px-12 lg:px-20 pb-20 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       <Helmet>
//         <title>All Products | Seven C Healthineers</title>
//         <meta
//           name="description"
//           content="Browse all biomedical and diagnostic equipment offered by Seven C Healthineers LLP."
//         />
//         <meta
//           name="keywords"
//           content="All Products, Biomedical Equipment, Medical Devices, Healthcare Solutions, Seven C Healthineers"
//         />
//         <link rel="canonical" href="https://www.7chealthineers.com/products" />
//       </Helmet>

//       <h1 className="text-4xl font-bold text-center text-sky-700 mb-12">
//         All Biomedical Products
//       </h1>

//       {groupedProducts.map((group, index) => (
//         <div key={index} className="mb-16">
//           {/* Subcategory Header */}
//           {/* <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//             {group.category} → {group.subCategory}
//           </h2> */}

//           {/* Products Grid */}
//           <div className="flex flex-wrap justify-center gap-6">
//             {group.products.map((product, idx) => (
//               <ProductCard
//                 key={idx}
//                 image={product.image}
//                 name={product.name}
//                 category={group.category}
//                 subCategory={group.subCategory}
//                 brochureLink={product.brochureLink}
//                 price={product.price}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllProductsPage;


import React from "react";
import { Helmet } from "react-helmet-async";
import productData from "../../../productData";
import ProductCard from "../../../components/ProductCard/ProductCard";

const AllProductsPage = () => {
  // Flatten all products into a single list
  const allProducts = [];

  productData.forEach((category) => {
    category.subCategories.forEach((sub) => {
      sub.products?.forEach((product) => {
        allProducts.push({
          ...product,
          category: category.category,
          subCategory: sub.name,
        });
      });
    });
  });

  return (
    <div className="pt-44 px-4 sm:px-6 md:px-12 lg:px-20 pb-20 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Helmet>
        <title>All Products - Biomedical Equipment | Seven C Healthineers Pune</title>
        <meta
          name="description"
          content="Browse all biomedical equipment, diagnostic machines, and healthcare devices offered by Seven C Healthineers LLP in Pune, India."
        />
        <meta
          name="keywords"
          content="Seven C Healthineers, All Products, Pune biomedical supplier, medical devices, diagnostic equipment, ICU ventilator, ultrasound machine, MRI systems, healthcare equipment India"
        />
        <link rel="canonical" href="https://www.7chealthineers.com/products" />
      </Helmet>


      <h1 className="text-4xl font-bold text-center text-sky-700 mb-12">
        All Biomedical Products
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {allProducts.map((product, idx) => (
          <ProductCard
            key={idx}
            image={product.image}
            name={product.name}
            category={product.category}
            subCategory={product.subCategory}
            brochureLink={product.brochureLink}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
