require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendMail = require("./nodemailer/nodemailer");

const app = express();
app.use(express.json());
app.use(cors());
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/public")));

app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/public/sitemap.xml"));
})

app.post("/api/contact", async (req, res) => {
    console.log("Received request body:", req.body); // 🔍 Debugging log

    const { type, ...data } = req.body;

    if (!type) {
        return res.status(400).json({ success: false, message: "Missing email type." });
    }

    const result = await sendMail(type, data);
    console.log("Mail function response:", result); // 🔍 Debugging log
    res.json(result);
});

app.post("/api/request-demo", async (req, res) => {
    try {
        const { name, userEmail, phone, demoDateTime, comments, productName } = req.body;

        if (!name || !userEmail || !phone || !demoDateTime || !productName) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // Send email
        const result = await sendMail("demo", { name, userEmail, phone, demoDateTime, comments, productName });
        console.log("Mail function response:", result); // Debugging log

        if (!result.success) {
            return res.status(500).json({ success: false, message: "Failed to send email" });
        }

        res.status(200).json({ success: true, message: "Demo request submitted and email sent successfully!" });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.post("/api/get-quote", async (req, res) => {
    try {
        const { name, userEmail, phone, productName, message } = req.body; 
        console.log("Data in sendMail:", req.body);

        if (!name || !userEmail || !phone || !productName) {  
            return res.status(400).json({ success: false, message: "All fields are required except message." });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        const result = await sendMail("quote", { name, userEmail, phone, productName, message }); 
        console.log("Mail function response:", result);

        if (!result.success) {
            return res.status(500).json({ success: false, message: "Failed to send email" });
        }

        res.status(200).json({ success: true, message: "Quote request submitted and email sent successfully!" });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));