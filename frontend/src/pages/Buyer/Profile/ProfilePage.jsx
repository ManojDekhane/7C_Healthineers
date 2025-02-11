import React from "react";

const ProfilePage = () => {
  return (
    <div className="container mx-auto mt-32 p-6 text-gray-800">
      {/* Profile Section */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Profile</h1>
     
      <p className="mb-6 text-lg leading-relaxed">
        <strong>About Us :</strong>
        <br></br><hr style={{height:"2px",backgroundColor:"black"}}></hr>

      Established in 2025,<strong>Seven C Healthineers LLP</strong> is a <strong>renowned and dynamic</strong> firm specializing in the distribution and trading of top-tier medical equipment. Our cutting-edge product catalog includes state-of-the-art <strong>Anesthesia Workstations, ICU Ventilators, MRI Machines, Ultrasound Systems, Pathology Equipment, and many more.</strong> We are committed to delivering exceptional quality by sourcing products manufactured with <strong>premium-grade materials and revolutionary </strong>technology.

Understanding the <strong>diverse and evolving</strong> needs of our clients, we offer an extensive and versatile range of medical solutions in various sizes, designs, and specifications. To ensure unmatched excellence, a dedicated team of quality analysts meticulously examines our products before final delivery, guaranteeing superior hygiene, pinpoint precision, and optimal performance.
<br></br>
<br></br>


 <strong>Infrastructure & Expertise :</strong>
 <br></br><hr style={{height:"2px",backgroundColor:"black"}}></hr>

 We take pride in our <strong>state-of-the-art infrastructure, equipped with</strong><strong>advanced technology and modern facilities</strong> to meet the growing demands of the healthcare industry. Our facility is managed by a highly skilled team of experienced professionals, ensuring seamless operations and outstanding efficiency. The synergy between our <strong>ultra-modern infrastructure and expert workforce</strong> has enabled us to establish a powerful and trusted foothold in the market.
<br></br>
<br></br>

 <strong>Leadership & Vision :</strong>
 <br></br><hr style={{height:"2px",backgroundColor:"black"}}></hr>

Under the <strong>visionary leadership</strong> of <strong> Mr. Dilshad Sayed</strong> and <strong>Mr. Khurshid Kazi, who bring </strong><strong>25+ years of groundbreaking expertise</strong> in the biomedical sector, we have earned a sterling reputation in this highly competitive market. Their strategic brilliance, in-depth industry knowledge, and dynamic leadership have been instrumental in gaining the unwavering trust of numerous clients across the region.

<br></br>
At Seven C Healthineers LLP, we are backed by a <strong>highly skilled and dedicated team</strong> of professionals who are instrumental in fulfilling the diverse and evolving needs of our clients. Each member of our workforce is an expert in their respective domain, allowing us to efficiently handle even the most complex tasks with ease.

Our team operates with unwavering dedication and synergy, ensuring seamless coordination and maximum productivity. We emphasize continuous learning and development, regularly organizing training programs and seminars to keep our professionals updated with the latest market trends and technological advancements.
      </p>
      
      {/* FactSheet Section */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4">FactSheet</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
        <ul className="list-disc pl-6">
          <li><strong>Nature of Business:</strong> Wholesaler/Distributor</li>
          <li><strong>Additional Business:</strong> Retail Business</li>
          <li><strong>Company CEO:</strong> Dilshad Sayed, Khurshid Kazi</li>
          <li><strong>Registered Address:</strong> Shop No.14, Suswani Complex, SR#38 /58, Near Police Station, A/P: Kondhwa Khurd, Pune, India. Pincode: 411048</li>
          <li><strong>Industry:</strong> Trading of Medical Equipment</li>
          <li><strong>Total Number of Employees:</strong> Up to 10 People</li>
          <li><strong>Legal Status of Firm:</strong> LLP</li>
          <li><strong>Promoter:</strong> Mr. Dilshad Sabirali Syed, Khurshid Kazi</li>
         
        </ul>
      </div>

     

      {/* Company USP Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Company USP</h2>
      <ul className="list-disc pl-6">
        <li><strong>Primary Competitive Advantage:</strong></li>
        <li>Good Financial Position & TQM</li>
        <li>Large Product Line</li>
        <li>Large Production Capacity</li>
        <li>Quality Measures / Testing Facilities: Yes</li>
      </ul>

      

      {/* Packaging/Payment and Shipment Details Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Packaging/Payment and Shipment Details</h2>
      <ul className="list-disc pl-6">
        <li><strong>Customized Packaging:</strong> No</li>
        <li><strong>Payment Mode:</strong> NEFT/RTGS/IMPS, Cheque, DD</li>
        <li><strong>Shipment Mode:</strong> By Road</li>
      </ul>

     
      
      {/* Our Team Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Our Team</h2>
      <p className="mb-6 text-lg leading-relaxed">
        Supported by a team of skilled and experienced professionals, we are successfully fulfilling the variegated needs of the customers. The experts working with us are masters of their respective assigned departments, which benefits us in undertaking as well as completing even the tough tasks with ease. Our employees make optimum use of the available resources, so as to make the offered range cost-effective. In order to maintain healthy working relations within the organization and to also complete tasks on time, all our experts work in sync with one another. Further, we arrange training classes and seminars on regular intervals to abreast our workforce with changing market dynamics and advanced technologies.
      </p>
      <ul className="list-disc pl-6 text-lg">
        <li>Production Managers</li>
        <li>Quality Analyzers</li>
        <li>Sales and Marketing Executives</li>
        <li>Administrative Staff</li>
      </ul>
    </div>
  );
};

export default ProfilePage;
