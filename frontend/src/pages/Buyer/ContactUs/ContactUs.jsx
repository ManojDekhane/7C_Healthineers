import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactUs = ({ marginTop = "mt-10 " }) => {
    const [formData, setFormData] = useState({
        name: "",
        userEmail: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending data:", { type: "contact", ...formData });

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
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
        <div className={`max-w-md mx-auto p-6 bg-white shadow-md rounded-lg ${marginTop}`}>
            <Helmet>
                <title>Contact Us | Seven C Healthineers</title>
                <meta name="description" content="Get in touch with Seven C Healthineers for inquiries, support, or partnership opportunities." />
                <meta name="keywords" content="Contact Seven C Healthineers, Medical Equipment Inquiry, Support, Healthcare Solutions" />
                <meta property="og:title" content="Contact Seven C Healthineers" />
                <meta property="og:description" content="Reach out to our team for any medical equipment or healthcare service inquiries." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.7chealthineers.com/contact-us" />
                <link rel="canonical" href="https://www.7chealthineers.com/contact-us" />
            </Helmet>

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
                <button type="submit" className="w-full bg-sky-600 text-white p-2 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
