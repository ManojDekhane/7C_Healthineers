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
                    { name: "Magnifico Open", image1: "/assets/mri_image/Magnifico_Open.webp" ,image2:"",image2:"",
                        description:" Magnifico Open represents the forefront of MRI technology, combining advanced imaging capabilities with an energy-efficient permanent magnet to ensure superior diagnostic quality and cost-effectiveness. Engineered for both patient comfort and clinical efficiency, this open MRI system is designed to meet the needs of modern radiology practices.",
                        features: [
                            { title: "Compact Design", description: "Requires only 20m² of space, allowing installation in smaller facilities." },
                            { title: "Low Power Consumption", description: "Operating at <3 kW, significantly reducing energy costs." },
                            { title: "Versatile Imaging", description: "9 multi-purpose coils optimize image quality for diverse anatomical regions." },
                            { title: "Enhanced Patient Experience", description: "Open architecture facilitates faster examinations, reducing patient discomfort and scan times." }
                          ]
                        
                    },
                    {
                        name: "S-scan Open",
                        image: "/images/s-scan-open.jpg",
                        description:" S-scan Open is a fusion of cutting-edge Italian engineering and user-centric MRI design, offering a superior balance of diagnostic precision and cost efficiency. With enhanced imaging speed and a space-conscious structure, it redefines musculoskeletal MRI.",
                        features: [
                            { title: "Accelerated Imaging", description: "35% faster scan times utilizing advanced speed-up techniques." },
                            { title: "Space-Efficient", description: "Designed to fit within 20m², making it highly adaptable." },
                            { title: "Energy Efficient", description: "Operates at an average 2 kW during acquisition." },
                            { title: "Expanded Imaging Capabilities", description: "14 multi-purpose coils maximize sensitivity for various musculoskeletal assessments." }
                        ]
                    },
                    
                    {
                        name: "G-scan Brio",
                        image: "/images/g-scan-brio.jpg",
                        description:" The G-scan Brio introduces an innovative approach to musculoskeletal MRI, incorporating weight-bearing capabilities to enhance diagnostic accuracy. Its open and tilting design allows for dynamic imaging, providing deeper insights into patient-specific conditions.",
                        features: [
                            { title: "Compact Installation", description: "A single-room MRI system requiring only 23m²." },
                            { title: "Specialized Imaging Coils", description: "12 dedicated multi-purpose coils tailored for spine and joint imaging." },
                            { title: "Dynamic Imaging", description: "Enables combination of weight-bearing exams with dedicated sequences for improved diagnostic clarity." },
                            { title: "Eco-Friendly", description: "Consumes <3 kW, ensuring sustainable operation." }
                        ]
                    },
                    
                    {
                        name: "O-scan",
                        image: "/images/o-scan.jpg",
                        description:"O-scan is a high-efficiency extremity MRI system, designed to meet the needs of specialized clinics and radiology departments. Its compact footprint and advanced imaging capabilities make it an optimal choice for cost-effective and high-quality musculoskeletal imaging.",
                        features: [
                            { title: "Ultra-Low Acoustic Noise", description: "Operates at 59.7 dB, minimizing patient discomfort." },
                            { title: "Compact Design", description: "Requires only 9m², allowing seamless installation in various clinical settings." },
                            { title: "Energy Efficient", description: "Utilizes only 1 kW, ensuring minimal operational costs." },
                            { title: "High Throughput", description: "Capable of scanning up to 3 patients per hour, optimizing workflow efficiency." }
                        ]
                    }
                    ,
                    {
                        name: "S-scan",
                        image: "/images/s-scan.jpg",
                        description:" S-scan is a cutting-edge musculoskeletal MRI scanner, leveraging eXP Technology to deliver precise imaging across the entire musculoskeletal system. Its small footprint and high efficiency make it an ideal solution for clinics with a significant orthopedic imaging workload.",
                        features: [
                            { title: "Optimized Imaging Speed", description: "35% faster scans with speed-up technology." },
                            { title: "Ergonomic and Space-Saving", description: "Designed for 20m² installations." },
                            { title: "Energy Efficiency", description: "Operates at an average 2 kW during acquisition." },
                            { title: "Versatile Imaging Capabilities", description: "14 multi-purpose coils enhance imaging across a wide range of anatomical structures." }
                        ]
                    }
                    ,
                ],
            },
            {
                name: "Ultrasound",
                image: "/images/ultrasound.jpg",
                products: [
                    { name: "MyLab™X90", image: "/images/mylab-x90.jpg",
                        description:"The ultimate in ultrasound imaging, MyLab™X90 is designed to deliver exceptional image quality and advanced clinical solutions. As a premium ultrasound system with Augmented Insight™, it simplifies workflow in repetitive tasks, complex procedures, and lesion analysis while enhancing diagnostic confidence. With its cutting-edge imaging technology, MyLab™X90 enables healthcare professionals to conduct precise, efficient, and comprehensive examinations across various clinical settings. This system is engineered to enhance diagnostic capabilities by providing high-resolution imaging, superior contrast, and deeper penetration, ensuring every detail is captured with unparalleled clarity.",
                        features: [
                            { title: "Augmented Insight™", description: "Enhances workflow efficiency, examination confidence, and time savings by integrating intelligent automation and AI-driven tools." },
                            { title: "XCrystal Technology", description: "Increases sensitivity and penetration for sharper, more homogeneous images from ultra-near-field to deeper areas, ensuring superior diagnostic accuracy." },
                            { title: "ClearWave Architecture", description: "Establishes a new benchmark for image quality, delivering unmatched clarity and detail across all imaging applications." },
                            { title: "eLED Monitor", description: "Offers brilliant colors, infinite contrast, fast response rate, and stable viewing angles over time, ensuring optimal visualization of diagnostic images." }
                        ]
                     },
                    { name: "MyLab™9 Platform", image: "/images/mylab-9.jpg" ,
                        description:"Designed to support a full range of diagnostic imaging environments, the MyLab™9 Platform provides superior visualization tools and enhanced image clarity to aid informed clinical decisions. Experience the ergonomic Italian design and intuitive interface that boost productivity. This advanced ultrasound system is tailored to meet the needs of various clinical specialties, from cardiology and radiology to musculoskeletal and vascular imaging. It features an intelligent interface that allows seamless interaction, improving workflow efficiency and overall diagnostic confidence. The MyLab™9 Platform ensures users can perform high-precision imaging while maintaining patient comfort and ease of use.",
                        features: [
                            { title: "easyMODE", description: "A unique touch tool that optimizes images using real-time intelligent algorithms, ensuring a consistent and high-quality diagnostic output." },
                            { title: "AppleProbe", description: "Ergonomically designed to reduce musculoskeletal strain by up to 70%, allowing clinicians to perform scans comfortably and efficiently." },
                            { title: "i-motion", description: "Ensures high-quality imaging and maximum frame rate, even in demanding imaging modes, providing real-time visualization of anatomical structures." },
                            { title: "40+ Imaging Optimization Parameters", description: "Adjusted effortlessly with just three swipes, enabling precise control over imaging settings for enhanced diagnostic outcomes." }
                        ]
                    },
                    { name: "MyLab™X8 Platform", image: "/images/mylab-x8.jpg",
                        description:"Accelerate your workflow with MyLab™X8, an innovative ultrasound system featuring a highly intuitive user interface and advanced clinical tools tailored to your needs. Built with a focus on efficiency and performance, this system integrates state-of-the-art imaging technologies, enabling rapid assessments with superior diagnostic accuracy. Whether used in radiology, cardiology, or women's health, MyLab™X8 is equipped to handle a wide range of applications with its advanced transducer technology and cutting-edge automation functions.",
                        features: [
                            { title: "Transducer Connectors", description: "Supports up to 5 transducers for rapid probe switching in demanding clinical settings, minimizing examination downtime." },
                            { title: "Tablet-Like Touchscreen", description: "Widescreen multi-function touchscreen for seamless operation, providing an intuitive interface that enhances user experience." },
                            { title: "Zero-Click Functions", description: "Automation simplifies complex procedures, enhancing efficiency and allowing clinicians to focus on patient care rather than manual adjustments." },
                            { title: "Large 21” Monitor", description: "Latest LCD technology ensures superior image detail and full-screen mode for enhanced visualization of anatomical structures." }
                        ]
                     },
                    { name: "MyLab™X75", image: "/images/mylab-x75.jpg",
                        description:"MyLab™X75 offers an extraordinary level of image clarity and scanning fluidity across all applications in general imaging, cardiovascular, women’s health, and shared service. It is designed to enhance patient care and increase daily productivity with automatic optimization tools. The smart ergonomic design and silent operation provide comfort to both patients and operators in every clinical setting.",
                        features: [
                            { title: "Automated Advanced Functions", description: "Expands diagnostic capabilities across multiple applications, ensuring accurate and consistent imaging." },
                            { title: "Exclusive easyMODE Solution", description: "Optimizes images with just three simple swipes, enabling rapid workflow and improved efficiency." },
                            { title: "Immediate Doppler Optimization", description: "Provides real-time Doppler enhancement, supporting high-quality vascular and cardiac imaging." },
                            { title: "Direct Access to Presets", description: "Allows users to start examinations instantly with the best clinical settings tailored to specific applications." }
                        ]
                     },
                    { name: "MyLab™A70", image: "/images/mylab-a70.jpg",
                        description:"MyLab™A70 is designed with agility and efficiency in mind, offering high-quality imaging for advanced patient care while adapting to any clinical setting. The system features integrated AI-driven tools that act as a co-pilot, streamlining workflows and enhancing user confidence in diagnoses.",
                        features: [
                            { title: "24” Opti-Light Barco Monitor (Optional)", description: "Provides superior detail enhancement and real-time backlit lighting for optimal image visualization." },
                            { title: "Wide 13.3” Touchscreen", description: "Multi-function tablet-like touchscreen for effortless control and ease of operation." },
                            { title: "Battery Support (Optional)", description: "Enables scanning without power for over an hour, ensuring uninterrupted diagnostics in mobile settings." },
                            { title: "5+1 Active Connectors", description: "Allows seamless probe switching to accommodate high-paced clinical environments." }
                        ]
                     },
                    { name: "MyLab™A50", image: "/images/mylab-a50.jpg" ,
                        description:"Designed for agility, MyLab™A50 is a versatile ultrasound system that delivers high performance in all clinical settings. Its user-friendly interface and workflow ensure optimal comfort during scans. Integrated AI-driven tools act as a co-pilot, enhancing efficiency and diagnostic confidence while prioritizing patient care.",
                        features: [
                            { title: "13.3” Wide Touchscreen", description: "Multi-function tablet-like touchscreen for an intuitive user experience." },
                            { title: "21.5” Adjustable LCD Monitor", description: "Provides superior detail enhancement for high-precision imaging." },
                            { title: "Battery Support (Optional)", description: "Enables fast booting and over an hour of scanning without power." },
                            { title: "4+1 Active Connectors", description: "Allows seamless probe switching for high-paced environments." }
                        ]
                    },
                    { name: "MyLab™X7", image: "/images/mylab-x7.jpg",
                        description:"MyLab™X7 technology empowers clinicians to make faster, more reliable decisions with its highly intuitive usability and ergonomic design. This resilient, eco-friendly, and mobile ultrasound system delivers exceptional image quality and an optimally simple interface for significantly faster outputs. The IPS technology LED monitor enhances image clarity, while advanced hemodynamic evaluation with high sensitivity and high spatial resolution allows for confident assessments, even in complex cases.",
                        features: [
                            { title: "Complete Advanced Clinical Tools", description: "Facilitates fast and precise diagnostics." },
                            { title: "Zero-Click Automation", description: "Streamlines workflow, improving efficiency and accuracy." },
                            { title: "21.5” LCD Widescreen Monitor", description: "Ensures crystal-clear image quality for detailed examinations." },
                            { title: "Large Probe Portfolio", description: "Expands scanning versatility across multiple applications." }
                        ]
                     },
                    { name: "MyLab™X6", image: "/images/mylab-x6.jpg",
                        description:"The MyLab™ X6 is an innovative cart-based ultrasound system designed to enhance workflow efficiency and elevate clinical performance through its cutting-edge imaging technology. This advanced system is equipped with a 21.5-inch HD IPS LED monitor, which delivers exceptional image clarity, ensuring accurate and detailed diagnostic assessments across various medical specialties.With its fast response time and intuitive user interface, the MyLab™ X6 seamlessly adapts to different clinical environments, making it an ideal choice for a wide range of applications, from general imaging and cardiology to obstetrics and musculoskeletal assessments. Its ergonomic design and smart functionalities enhance user comfort, enabling effortless operation even in demanding healthcare settings.",
                        features: [
                            { title: "Tailored Configuration", description: "Offers customizable settings to suit specific clinical requirements, allowing healthcare professionals to optimize imaging parameters for enhanced diagnostic accuracy." },
                            { title: "Zero-Click Automation", description: "This advanced feature boosts productivity by minimizing the need for manual interactions, streamlining examinations, and reducing operator fatigue." },
                            { title: "21.5” LCD Widescreen Monitor", description: "Provides high-resolution imaging with superior brightness and contrast, ensuring precise visualization of anatomical structures for more confident diagnoses." },
                            { title: "Large Probe Portfolio", description: "Supports a wide range of transducers, catering to various imaging needs such as abdominal, vascular, cardiac, musculoskeletal, and obstetric applications." }
                        ]
                     },
                    { name: "MyLab™X5", image: "/images/mylab-x5.jpg",
                        description:"The MyLab™ X5 is a state-of-the-art console ultrasound system designed to meet the diverse imaging needs of healthcare professionals across multiple clinical applications. Combining ergonomic design, intuitive functionality, and high-performance imaging technology, this system ensures a seamless and efficient workflow while delivering exceptional diagnostic accuracy.Built with a focus on ease of use and operator comfort, the MyLab™ X5 features an intuitive user interface with responsive controls, allowing for effortless navigation and real-time image adjustments. The system’s advanced imaging capabilities enable the visualization of even the most intricate anatomical structures, ensuring accurate assessments in a variety of clinical scenarios, including cardiology, vascular imaging, musculoskeletal evaluations, and general diagnostics.",
                        features: [
                            { title: "Fast and Easy Workflow", description: "Optimized for rapid and seamless operation." },
                            { title: "Zero-Click Automation", description: "Minimizes manual intervention, enhancing efficiency." },
                            { title: "Diagnostic Confidence", description: "Advanced imaging capabilities ensure precise assessments." },
                            { title: "Large Probe Portfolio", description: "Adaptable for a wide range of clinical applications." }
                        ]
                     },
                    { name: "MyLab™Omega", image: "/images/mylab-omega.jpg" ,
                        description:"MyLab™Omega is a high-end, portable, multidisciplinary ultrasound unit featuring an ergonomic design. Built with an advanced imaging engine and powered by Windows® 10, it delivers unparalleled accuracy, quality, and versatility across clinical applications.",
                        features: [
                            { title: "Swiveling 15.6” Monitor", description: "Touchscreen with rotating and tilting functionality for improved usability." },
                            { title: "Zero-Click Automation", description: "Enhances workflow efficiency and diagnostic precision." },
                            { title: "Extreme Agility", description: "Onboard dual connectors enable quick and seamless probe transitions." }
                        ]
                    },
                    { name: "MyLab™Sigma", image: "/images/mylab-sigma.jpg",
                        description:"The MyLab™ Sigma represents the latest generation of portable ultrasound technology, engineered to provide fast, precise, and reliable diagnostics in any clinical environment. Whether in hospitals, emergency rooms, intensive care units, outpatient clinics, or field settings, this compact yet powerful ultrasound unit delivers exceptional imaging performance and seamless usability, making it an essential tool for modern healthcare professionals.Designed with extreme agility and versatility, the MyLab™ Sigma features an onboard dual-probe connector, ensuring quick transitions between different transducers to accommodate a variety of clinical applications, including abdominal, vascular, musculoskeletal, cardiac, and point-of-care ultrasound (POCUS) assessments. The system can be further expanded to support four probe connectors when mounted on its dedicated trolley multi-connector, enhancing its adaptability and efficiency in high-demand medical environments.",
                        features: [
                            { title: "Fast and Easy Operation", description: "Streamlined controls for quick diagnostics." },
                            { title: "Zero-Click Automation", description: "Reduces manual input, optimizing workflow." },
                            { title: "Swiveling 15.6” Touchscreen Monitor", description: "Enhances image review and usability." },
                            { title: "Extensive Connectivity", description: "Dual socket connectors provide flexibility for various probes." }
                        ]
                     },
                    { name: "MyLab™X1", image: "/images/mylab-x1.jpg" ,
                        description:"The MyLab™ X1 is an ultra-portable, fully touchscreen ultrasound system engineered to provide exceptional mobility, ease of use, and high-quality imaging in a compact, lightweight design. As a next-generation handheld ultrasound unit, it delivers fast, accurate, and reliable diagnostics, making it ideal for a wide range of clinical applications across emergency medicine, critical care, musculoskeletal imaging, vascular assessments, and general diagnostics.Designed with modern healthcare demands in mind, the MyLab™ X1 ensures maximum flexibility, allowing medical professionals to perform scans at the bedside, in the emergency room, in the operating theater, or even in remote locations. The system’s fully touchscreen interface simplifies navigation and streamlines workflow, making examinations quicker and more efficient.A major advantage of the MyLab™ X1 is its fully cleanable, seamless touchscreen, which allows for easy and thorough disinfection, reducing the risk of cross-contamination and ensuring a high standard of infection control in all clinical environments. This makes it an excellent choice for point-of-care ultrasound (POCUS) applications, where hygiene and ease of cleaning are critical considerations.",
                        features: [
                            { title: "Ultra-Light and Portable", description: "Designed for easy transport with a long-lasting battery." },
                            { title: "Fast Reaction Times", description: "Delivers quick imaging responses for real-time diagnostics." },
                            { title: "Gesture-Driven Touchscreen", description: "Intuitive interface with extensive connectivity options." },
                            { title: "Fully Cleanable Surface", description: "Allows seamless disinfection for enhanced safety." }
                        ]
                    },
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
