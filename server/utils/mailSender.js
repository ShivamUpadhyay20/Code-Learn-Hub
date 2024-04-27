const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIN_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // Use SSL/TLS. Change to false if not required.
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        minVersion: 'TLSv1.2', // Example: Specify the minimum SSL/TLS version
        // ciphers: 'AES128-SHA256', // Example: Specify the cipher suites
      },
    });

    let info = await transporter.sendMail({
      from: `"CodePlay | Rohit & Shivam" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    return error;
  }
};

module.exports = mailSender;
