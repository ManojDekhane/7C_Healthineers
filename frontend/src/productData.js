import Pathology from "../src/assets/product-category-images/Pathology.jpg";
import CriticalCare from "../src/assets/product-category-images/criticalcare.jpg";
import radiology from "../src/assets/product-category-images/radiology.png";

const productData = [
    {
        category: "Radiology and Diagnostic",
        link: "/radiology",
        image: radiology,
        subCategories: [
            {
                name: "MRI Versions",
                image: "/images/mri.jpg",
                products: [
                    { name: "Magnifico Open", image: "/images/magnifico-open.jpg" },
                    { name: "S-scan Open", image: "/images/s-scan-open.jpg" },
                    { name: "G-scan Brio", image: "/images/g-scan-brio.jpg" },
                    { name: "O-scan", image: "/images/o-scan.jpg" },
                    { name: "S-scan", image: "/images/s-scan.jpg" },
                ],
            },
            {
                name: "Ultrasound",
                image: "/images/ultrasound.jpg",
                products: [
                    { name: "MyLab™X90", image: "/images/mylab-x90.jpg" },
                    { name: "MyLab™9 Platform", image: "/images/mylab-9.jpg" },
                    { name: "MyLab™X8 Platform", image: "/images/mylab-x8.jpg" },
                    { name: "MyLab™X75", image: "/images/mylab-x75.jpg" },
                    { name: "MyLab™A70", image: "/images/mylab-a70.jpg" },
                    { name: "MyLab™A50", image: "/images/mylab-a50.jpg" },
                    { name: "MyLab™X7", image: "/images/mylab-x7.jpg" },
                    { name: "MyLab™X6", image: "/images/mylab-x6.jpg" },
                    { name: "MyLab™X5", image: "/images/mylab-x5.jpg" },
                    { name: "MyLab™Omega", image: "/images/mylab-omega.jpg" },
                    { name: "MyLab™Sigma", image: "/images/mylab-sigma.jpg" },
                    { name: "MyLab™X1", image: "/images/mylab-x1.jpg" },
                ],
            },
        ],
    },
    {
        category: "Pathology",
        link: "/pathology",
        image: Pathology,
        subCategories: [],
    },
    {
        category: "Critical Care",
        link: "/critical-care",
        image: CriticalCare,
        subCategories: [],
    },
];

export default productData;
