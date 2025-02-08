require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sendMail = require("./nodemailer/nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
    const { name, userEmail, message } = req.body;

    if (!name || !userEmail || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const response = await sendMail(name, userEmail, message);
    res.status(response.success ? 200 : 500).json(response);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));