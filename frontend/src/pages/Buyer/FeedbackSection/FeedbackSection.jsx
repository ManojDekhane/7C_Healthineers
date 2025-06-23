import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const FeedbackSection = () => {

  const [feedbacks, setFeedbacks] = useState([
    { name: "John Doe", message: "Great service! Highly recommended." },
    { name: "Jane Smith", message: "The products are really good." },
  ]);

  const [newFeedback, setNewFeedback] = useState({ name: "", message: "" });
  const [visibleCount, setVisibleCount] = useState(2); // Number of feedbacks visible

  const handleInputChange = (e) => {
    setNewFeedback({ ...newFeedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.name && newFeedback.message) {
      setFeedbacks([newFeedback, ...feedbacks]); // Add new feedback at the top
      setNewFeedback({ name: "", message: "" });
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>Feedback - Share Your Experience | Seven C Healthineers</title>
        <meta name="description" content="Tell us about your experience with Seven C Healthineers. Your feedback helps us improve!" />
        <meta name="keywords" content="Feedback, Seven C Healthineers Reviews, Customer Testimonials, Medical Services Feedback" />
      </Helmet> */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Feedback</h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Feedback Form */}
          <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Submit Your Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={newFeedback.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={newFeedback.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                required
              ></textarea>
              <button type="submit" className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Previous Feedback */}
          <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">What Others Say</h3>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {feedbacks.slice(0, visibleCount).map((fb, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <p className="text-gray-900 font-medium">{fb.name}</p>
                  <p className="text-gray-600 text-sm">{fb.message}</p>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < feedbacks.length && (
              <button
                onClick={() => setVisibleCount(visibleCount + 2)}
                className="mt-4 w-full text-blue-600 font-semibold hover:underline"
              >
                Load More Feedback
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSection;
