require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMail = async (type, data) => {
    let mailOptions;

    if (type === "contact") {
        const { name, userEmail, message } = data;
        mailOptions = {
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: userEmail,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
        };
    } else if (type === "demo") {
        const { name, userEmail, phone, demoDateTime, comments } = data;
        mailOptions = {
            from: `"Demo request" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: userEmail,
            subject: `New Demo Request from ${name}`,
            text: `Name: ${name}
                Email: ${userEmail}
                Phone: ${phone}
                Preferred Demo Date & Time: ${demoDateTime}
                Additional Comments: ${comments || "No comments provided."}`,
        };
    } else if (type === "quote") {
        const { name, userEmail, phone, productName, message } = data;
        mailOptions = {
            from: `"Quote Request" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            replyTo: userEmail,
            subject: `New Quote Request from ${name}`,
            text: `Name: ${name}
                Email: ${userEmail}
                Phone: ${phone}
                Interested Product: ${productName}
                Additional Message: ${message || "No additional message provided."}`,
        };
    } else {
        return { success: false, message: "Invalid email type." };
    }

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: `${type === "contact" ? "Contact" : "Demo request"} email sent successfully!` }
    } catch (error) {
        console.error("Error sending email: ", error);
        return { success: false, message: `Failed to send ${type} email.` };
    }
}

module.exports = sendMail;