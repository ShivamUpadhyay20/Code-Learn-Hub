const mongoose = require("mongoose");
const nodemailer = require("nodemailer"); // Import nodemailer
const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
	// Create a transporter
	const transporter = nodemailer.createTransport({
		host: process.env.MAIN_HOST,
		port: process.env.EMAIL_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: process.env.MAIL_USER,
		  pass: process.env.MAIL_PASS,
		},
	  });
	  
	  // Define the email options
	  const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: email,
		subject: "Verification Email",
		html: emailTemplate(otp),
	  };

	// Send the email
	try {
		const mailResponse = await transporter.sendMail(mailOptions); // Use transporter to sendMail
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function (next) {
	console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;
