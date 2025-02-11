import React from "react";

const ProfilePage = () => {
  return (
    <div className="container mx-auto mt-32 p-6 text-gray-800">
      {/* Profile Section */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Profile</h1>
      <p className="mb-6 text-lg leading-relaxed">
        Established in the year 2025, we,<strong> SevenC Healthineers</strong>, are an illustrious firm engaged in distributing and trading a wide range of Medical Equipment. Offered range of product includes Anesthesia Workstation, ICU Ventilators, MRI, Ultrasound, Pathology and many more name in the catalog. All our products are manufactured using quality tested raw material with the advanced machines and technologies. To match the variegated requirements of the clients, we offer our entire range in varied sizes, designs, and specifications. Before the final delivery, a team of quality analyzers stringently examines our products to ensure their hygiene, fine finishing, and accuracy of designs.
        <br /><br />
        We have constituted a sophisticated infrastructure facility for having proper execution of business activities. Installed with all the machines and technologies necessary for manufacturing hospital equipment, our infrastructure enables us to withstand the growing needs of the clients. Moreover, we have hired a team of experienced professionals to manage and control all the infrastructural activities. All our experts work in harmony among one another to attain the organizational tasks on time and in an efficient way. Owing to the perfect blend of our advanced manufacturing facilities and diligent workforce, we have mustered numerous patrons for ourselves throughout the region.
        <br /><br />
        Under the visionary guidance of our mentor, <strong>Mr. Dilshad</strong> and <strong> Mr. Khurshid Kazi </strong> with <strong> 25+ years </strong> of experience in this bio-medical market, we have occupied a commendable status in the highly competitive market. Their managerial skills, detailed knowledge of the industry, and vibrant leadership skills have enabled us to gain the trust of a large number of patrons.
      </p>
      
      {/* FactSheet Section */}
      <h2 className="text-2xl font-bold text-blue-700 mb-4">FactSheet</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
        <ul className="list-disc pl-6">
          <li><strong>Nature of Business:</strong> Wholesaler/Distributor</li>
          <li><strong>Additional Business:</strong> Retail Business</li>
          <li><strong>Company CEO:</strong> Dilshad Sayyed, Khurshid Kazi</li>
          <li><strong>Registered Address:</strong> Shop No.14, Suswani Complex, SR#38 /58, Near Police Station, A/P: Kondhwa Khurd, Pune, India. Pincode: 411048</li>
          <li><strong>Industry:</strong> Trading of Medical Equipment</li>
          <li><strong>Total Number of Employees:</strong> Up to 10 People</li>
          <li><strong>GST Registration Date:</strong> 01-02-2025</li>
          <li><strong>Legal Status of Firm:</strong> Proprietorship</li>
          <li><strong>Promoter:</strong> Mr. Dilshad Sabirali Syed, Khurshid Kazi</li>
          <li><strong>Annual Turnover:</strong> 5 - 25 Cr</li>
        </ul>
      </div>

      {/* Infrastructure Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Infrastructure</h2>
      <ul className="list-disc pl-6">
        <li><strong>Location Type:</strong> URBAN</li>
        <li><strong>Building Infrastructure:</strong> Permanent</li>
        <li><strong>Size of Premises:</strong> 700 square feet</li>
        <li><strong>Space Around:</strong> Front porch</li>
      </ul>

      {/* Company USP Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Company USP</h2>
      <ul className="list-disc pl-6">
        <li><strong>Primary Competitive Advantage:</strong></li>
        <li>Good Financial Position & TQM</li>
        <li>Large Product Line</li>
        <li>Large Production Capacity</li>
        <li>Quality Measures / Testing Facilities: Yes</li>
      </ul>

      {/* Statutory Profile Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Statutory Profile</h2>
      <ul className="list-disc pl-6">
        <li><strong>Import Export Code (IEC):</strong> 31070*****</li>
        <li><strong>Tan No.:</strong> NSKJ0*****</li>
        <li><strong>Banker:</strong> HDFC BANK</li>
        <li><strong>GST No.:</strong> 27ARJPS3434J1ZE</li>
      </ul>

      {/* Packaging/Payment and Shipment Details Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Packaging/Payment and Shipment Details</h2>
      <ul className="list-disc pl-6">
        <li><strong>Customized Packaging:</strong> No</li>
        <li><strong>Payment Mode:</strong> Cash, Cheque, DD</li>
        <li><strong>Shipment Mode:</strong> By Road</li>
      </ul>

      {/* ISO Certificate Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">ISO Certificate</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center">
        <p className="text-lg font-semibold">ISO Certificate. To view, kindly see the image below.</p>
      </div>
      <div className="bg-gray-200 mt-6 p-6 rounded-lg shadow-md flex justify-center items-center h-64">
        <p className="text-lg font-semibold">[Image Placeholder]</p>
      </div>
      
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
