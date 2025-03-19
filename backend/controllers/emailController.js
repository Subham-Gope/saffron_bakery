import dotenv from "dotenv";
import { transporter } from "../config/mailer.js";

dotenv.config();

export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields in the form" });
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "Enquiry related to customer order",
    text: `Name: ${name} \n Email: ${email} \n Message: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent");
    res.status(200).json({ message: "Email sent success" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};
