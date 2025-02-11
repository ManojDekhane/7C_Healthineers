require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendMail = require("./nodemailer/nodemailer");

const app = express();
app.use(express.json());
app.use(cors());


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
        const { name, userEmail, phone, demoDateTime, comments } = req.body;

        if (!name || !userEmail || !phone || !demoDateTime) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // Send email
        const result = await sendMail("demo", { name, userEmail, phone, demoDateTime, comments });
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));