const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, companyName, services, additionalComments, preferredContactMethod } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service
    auth: {
      user: "your-email@gmail.com", // Replace with your email
      pass: "your-email-password", // Replace with your email password
    },
  });

  const mailOptions = {
    from: email,
    to: "obiijeoma32@gmail.com", // Replace with your receiving email
    subject: "New Quote Request",
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
