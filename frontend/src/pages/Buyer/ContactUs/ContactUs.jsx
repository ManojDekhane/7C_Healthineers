import { useState } from "react";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        userEmail: "",
        message: ""
    });

    const location = useLocation();

    const marginTopClass = location.pathname === "/contact-us" ? "mt-44" : "mt-10";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending data:", { type: "contact", ...formData });

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "contact",
                    ...formData
                }),
            });

            const data = await response.json();
            console.log("Response from server:", data);
            
            if (data.message) {
                alert("Message Sent Successfully!");
                setFormData({ name: "", userEmail: "", message: "" });
            } else {
                alert("Error sending message.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong.");
        }
    };

    return (
        <div className={`max-w-md mx-auto p-6 bg-white shadow-md rounded-lg ${marginTopClass}`}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="userEmail"
                    placeholder="Your Email"
                    value={formData.userEmail}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
