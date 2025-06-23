import { Helmet } from "react-helmet-async";

import oscan from "../../assets/pdf/O-scan.pdf"
import sscan from "../../assets/pdf/S_scan.pdf";
import sscanopen from "../../assets/pdf/S-scan_OPEN.pdf";
import Magnificioscan from "../../assets/pdf/Magnifico_Open.pdf";

import mylaba50 from "../../assets/pdf/mylab_A50.pdf";
import mylaba70 from "../../assets/pdf/mylab_A70.pdf";
import mylabx75 from "../../assets/pdf/MyLab_X75.pdf";
import mylabx90 from "../../assets/pdf/MyLab_X90.pdf";
import mylab9 from "../../assets/pdf/MyLab9_plat.pdf";
import mylabomega from "../../assets/pdf/MyLabOmega.pdf";
import mylabsigma from "../../assets/pdf/MyLabSigma.pdf";
import mylabx1 from "../../assets/pdf/MyLabX1.pdf";
import mylabx5 from "../../assets/pdf/MyLabX5.pdf";
import mylabx6 from "../../assets/pdf/MyLabX6.pdf";
import mylabx7 from "../../assets/pdf/MyLabX7.pdf";
import mylabx8 from "../../assets/pdf/MyLabX8.pdf";
import mtv1000 from "../../assets/pdf/MTV1000.pdf";
import mv2000 from "../../assets/pdf/MV2000.pdf";
import omniox_series from "../../assets/pdf/OmniOx_Series.pdf";

import newpatholyte from "../../assets/pdf/New_Patholyte_Advance.pdf";
import smart7 from "../../assets/pdf/Smart-7_Advance_new.pdf";
const CataloguePage = () => {
  const pdfCategories = [
    {
      category: "Radiology and Diagnostics → MRI",
      documents: [
        { title: "O-Scan", file: oscan },
        { title: "S-Scan", file: sscan },
        { title: "S-scan Open", file: sscanopen },
        { title: "Magnifico Open", file: Magnificioscan },
      ],
    },
    {
      category: "Radiology and Diagnostics → UltraSound",
      documents: [
        { title: "MyLab™ X90", file: mylabx90 },
        { title: "MyLab™9 Platform", file: mylab9 },
        { title: "MyLab™X8 Platform", file: mylabx8 },
        { title: "MyLab™X75", file: mylabx75 },
        { title: "MyLab™A70", file: mylaba70 },
        { title: "MyLab™A50", file: mylaba50 },
        { title: "MyLab™X7", file: mylabx7 },
        { title: "MyLab™X6", file: mylabx6 },
        { title: "MyLab™X5", file: mylabx5 },
        { title: "MyLab™Omega", file: mylabomega },
        { title: "MyLab™Sigma", file: mylabsigma },
        { title: "MyLab™X1", file: mylabx1 },
      ],
    },
    {
      category: "Pathology → Pathology Machines",
      documents: [
        { title: "Patholyte Advance Electrolyte Fully Auto Analyser(Na/K/CL/iCa)", file: newpatholyte },
        { title: "Orbit Smart 7 Biochemistry Analyser (Semi-Auto)", file: smart7 },
      ],
    },
    {
      category: "Critical Care → Ventilator",
      documents: [
        { title: "MTV1000", file: mtv1000 },
        { title: "MV2000", file: mv2000 },
        { title: "OmniOx_Series", file: omniox_series },
      ]
    }

  ];

  // return (
  //   <div className="pt-40 px-4 sm:px-8 lg:px-20 bg-gray-50 min-h-screen">
  //     <h1 className="text-4xl font-bold mb-6 text-center text-blue-700"> Catalogue</h1>

  //     {pdfCategories.map((category, catIndex) => (
  //       <div key={catIndex} className="mb-10">
  //         <h2 className="text-xl font-semibold text-gray-700 mb-4">{category.category}</h2>

  //         <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
  //           {category.documents.map((pdf, index) => (
  //             <div
  //               key={index}
  //               className="w-44 p-2 bg-white rounded-lg shadow-sm border text-sm flex flex-col justify-between"
  //             >
  //               <div>
  //                 <h3 className="text-sm font-semibold mb-2 text-gray-800">{pdf.title}</h3>

  //                 {/* Static first-page preview with no scroll */}
  //                 {/* <div className="w-full h-28 overflow-hidden rounded border">
  //                   <embed
  //                     src={`${pdf.file}#page=1&zoom=100&toolbar=0&navpanes=0&scrollbar=0`}
  //                     type="application/pdf"
  //                     className="w-full h-full"
  //                   />
  //                 </div> */}
  //               </div>

  //               <a
  //                 href={pdf.file}
  //                 download
  //                 className="text-center px-2 py-1 mt-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
  //               >
  //                 ⬇️ Download PDF
  //               </a>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className="pt-44 px-4 sm:px-6 md:px-12 lg:px-20 pb-20 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Helmet>
        <title>Catalogues | Seven C Healthineers</title>
        <meta
          name="description"
          content="Download brochures and catalogs for biomedical and diagnostic equipment offered by Seven C Healthineers LLP."
        />
        <link rel="canonical" href="https://www.7chealthineers.com/catalogs" />
      </Helmet>

      <h1 className="text-4xl font-bold text-center text-sky-700 mb-12">
        Product Catalogues
      </h1>

      {pdfCategories.map((cat, i) => (
        <div key={i} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {cat.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cat.documents.map((pdf, j) => (
              <div
                key={j}
                className="p-5 bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {pdf.title}
                </h3>

                <a
                  href={pdf.file}
                  download
                  className="mt-auto bg-sky-600 text-white text-sm py-2 px-4 rounded hover:bg-sky-700 transition inline-block"
                >
                  ⬇️ Download PDF
                </a>
              </div>

            ))}
          </div>
        </div>
      ))}
    </div>
  );

};

export default CataloguePage;

