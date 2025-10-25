import transporter from "../config/emailConfig.js";
import dotenv from "dotenv";

dotenv.config();

export const sendResetEmail = async (userEmail, resetToken) => {
  const resetLink = `${process.env.BASE_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: `"Support Team" <${process.env.SMTP_USER}>`,
    to: userEmail,
    subject: "Password Reset Request",
    html: `
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}" target="_blank">Reset Password</a>
      <p>This link will expire in 15 minutes.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent to:", userEmail);
  } catch (error) {
    console.error("Error sending reset email:", error);
    throw new Error("Could not send password reset email");
  }
};
