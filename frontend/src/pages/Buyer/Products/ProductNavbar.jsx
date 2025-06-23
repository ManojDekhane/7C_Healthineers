import { useNavigate } from "react-router-dom";
import productData from "../../../productData";

const Productcou = () => {
  const navigate = useNavigate();

  const handleNavigation = (subCategory) => {
    navigate(`/subcategory/${subCategory}`);
  };

  // Extract all subcategories from productData
  const allSubCategories = productData.flatMap((category) => category.subCategories || []);

  // Separate "Pathology Consumables" and "Pathology Machines"
  const specialCategories = ["Haeomatology Reagents", "Pathology Machines"];
  const regularSubCategories = allSubCategories.filter(sub => !specialCategories.includes(sub.name));
  const specialSubCategories = allSubCategories.filter(sub => specialCategories.includes(sub.name));

  // Combine lists: Regular first, Pathology categories at the end
  const sortedSubCategories = [...regularSubCategories, ...specialSubCategories];

  return (
    <div className="mt-[calc(32px+64px)] lg:mt-[calc(32px+106px)] w-full bg-white py-4 shadow-sm flex justify-center items-center px-4">
      <div className="w-full max-w-7xl">
        {/* Scrollable container */}
        <div className="mt-4 w-full justify-start overflow-x-auto whitespace-nowrap flex gap-4 lg:gap-12 snap-x snap-mandatory px-2 flex-nowrap">
          {sortedSubCategories.map((sub, idx) => (
            <div
              key={idx}
              className="cursor-pointer flex flex-col items-center flex-shrink-0 min-w-[120px] snap-start"
              onClick={() => handleNavigation(sub.name)}
            >
              <img
                src={sub.image}
                alt={sub.name}
                className="w-10 h-10 sm:w-20 sm:h-20 md:w-15 md:h-15 object-cover rounded-full border border-gray-300"
              />
              <h3
                title={sub.name}
                className="font-bold text-[12px] sm:text-sm text-center max-w-[140px] whitespace-normal"
              >
                {sub.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productcou;
