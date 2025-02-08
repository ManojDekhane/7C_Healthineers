require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMail = async (name, userEmail, message) => {
    const mailOptions = {
        from: `"Website Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        replyTo: userEmail,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email." };
    }
};

module.exports = sendMail;