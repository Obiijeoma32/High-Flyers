const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Use cors middleware to allow requests from any origin
app.use(cors());
app.use(bodyParser.json());

// Middleware to set Referrer-Policy header
app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, companyName, services, additionalComments, preferredContactMethod } = req.body;

  if (!firstName || !email || !lastName || !phoneNumber || !companyName || !services || !additionalComments || !preferredContactMethod) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dami600bab@gmail.com",
      pass: "dunn xkaq fgpl zwol",
    },
  });

  const mailOptions = {
    from: email,
    to: "dami600bab@gmail.com",
    replyTo: email,
    subject: "New Quote Request From high flyers",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Company Name: ${companyName}
      Services: ${services.label}
      Additional Comments: ${additionalComments}
      Preferred Contact Method: ${preferredContactMethod.label}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
