import React, { useEffect, useState } from "react";

const GetAQuote = ({ isOpen, onClose, productName }) => {
    const [formData, setFormData] = useState({
        name: "",
        userEmail: "",
        phone: "",
        comments: "",
    });

    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.userEmail)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5000/api/get-quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    type: "quote",
                    name: formData.name,
                    userEmail: formData.userEmail,
                    phone: formData.phone,
                    productName,  
                    message: formData.comments     
                }),
            });
    
            const data = await response.json();
            alert(data.message);
    
            if (data.success) {
                setFormData({ name: "", userEmail: "", phone: "", comments: "" });
                onClose();
            }
        } catch (error) {
            console.error("Error submitting quote request:", error);
        }
    };
    

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 p-4 pt-36 mt-4">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md h-[72vh] flex flex-col">
                {/* Scrollable container */}
                <div className="overflow-y-auto flex-grow px-2" style={{ maxHeight: "70vh" }}>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Request a Quote</h2>
                    <p className="text-lg font-medium text-center text-blue-600 mb-4">{productName}</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="userEmail"
                            placeholder="Email"
                            required
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={formData.userEmail}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <textarea
                            name="comments"
                            placeholder="Additional Comments (Optional)"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                            value={formData.comments}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold transition hover:bg-blue-700">
                            Submit Quote Request
                        </button>
                    </form>
                    {/* Spacer for better scroll visibility */}
                    <div className="h-4"></div>
                </div>
                {/* Close button stays at the bottom */}
                <button
                    onClick={onClose}
                    className="mt-4 w-full px-6 py-3 bg-sky-600 text-white font-semibold rounded-md shadow-md hover:bg-sky-700 transition-all duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default GetAQuote;
