import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const ContactUs = ({ marginTop = "mt-10 " }) => {
    const location = useLocation();
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
        <>
            <div className={`max-w-md mx-auto p-6 bg-white shadow-md rounded-lg ${marginTop}`}>
                {location.pathname === "/contact-us" && (
                    <Helmet>
                        <title>Contact Seven C Healthineers - Biomedical Equipment Supplier Pune</title>
                        <meta
                            name="description"
                            content="Contact Seven C Healthineers LLP, your trusted biomedical equipment supplier in Pune. Reach out for inquiries, demos, and medical product support across India."
                        />
                        <meta
                            name="keywords"
                            content="Contact Seven C Healthineers, Pune medical supplier, biomedical equipment India, healthcare solutions, ICU ventilators, ultrasound systems, diagnostics equipment"
                        />
                        <meta property="og:title" content="Contact Seven C Healthineers" />
                        <meta property="og:description" content="Reach out for reliable biomedical devices and medical equipment solutions across India." />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://www.7chealthineers.com/contact-us" />
                        <link rel="canonical" href="https://www.7chealthineers.com/contact-us" />
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "ContactPage",
                                "name": "Contact Seven C Healthineers LLP",
                                "url": "https://www.7chealthineers.com/contact-us",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.7chealthineers.com/contact-us"
                                }
                            })}
                        </script>
                    </Helmet>

                )}


                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
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
                    {/* <button type="submit" className="w-full bg-sky-600 text-white p-2 rounded">
                        Send Message
                    </button> */}

                    <button
                        type="submit"
                        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-5 rounded-xl shadow-md transition-all text-base sm:text-lg 
    hover:scale-105 hover:shadow-lg duration-300 ease-in-out mx-auto block"
                    >
                        Send Message
                    </button>

                </form>

            </div>

            <div className="max-w-md mx-auto mt-6 text-center">
                <a
                    href="https://wa.me/918484845154?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20medical%20equipment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-5 rounded-xl shadow-lg transition-all text-base sm:text-lg
      animate-bounce hover:scale-105 hover:shadow-xl duration-300 ease-in-out mx-auto"
                >
                    💬 Connect with us on WhatsApp
                </a>
            </div>

        </>
    );
};

export default ContactUs;
