const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

let refreshTokens = [];

async function sendEmail({ email }) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: "vdovychenko.ire@gmail.com",
        pass: "halm giwa mirr wibq",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailHTML = `
    <h2>You have requested to reset your password</h2>
    <p>To reset your password, click the following link and follow the instructions:</p>
    <p><a href="http://localhost:3000/reset-password">RESET PASSWORD</a></p>
    <p>Why do I have to reset my password?</p>
    <p>As a security best practice, Sports Hub does not store your password. As such, we cannot simply send you your old password. A unique link to reset your password has been generated for you.</p>
    <p>Please ignore this message if you haven’t requested resetting your password.</p>
    <p>Sports Hub</p>
`;

    const mailConfigs = {
      from: "vdovychenko.ire@gmail.com",
      to: email,
      subject: "Reset Your Password",
      html: mailHTML,
    };

    const info = await transporter.sendMail(mailConfigs);
    console.log("Message sent:", info.messageId);
    return { message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("An error has occurred");
  }
}

app.post("/api/send-email", async (req, res) => {
  const { email } = req.body;
  try {
    const response = await sendEmail({ email });
    res.json({ message: response.message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/get-token", (req, res) => {
  const { email } = req.body;
  const user = { Email: email };
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "15d" });
  refreshTokens.push(refreshToken);
  res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 30 * 24 * 60 * 60 * 1000  });
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

app.post("/api/refresh-token", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token is missing" });
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const accessToken = generateAccessToken({ Email: user.Email });
    res.json({ accessToken: accessToken });
  });
});

app.post("/api/verify-token", (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403);
    } else {
      res.json({ user });
    }
  });
});

app.post("/api/logout", (req, res) => {
  const refreshTokenCookie = req.cookies.refreshToken;

  if (refreshTokenCookie) {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(token => token !== refreshTokenCookie);
    res.send("Logged out successfully");
  } else {

    res.status(401).send("Refresh token cookie not found");
  }
});

function generateAccessToken(user) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    console.log(accessToken);
    return accessToken;
  } 

app.listen(port, () => {
  console.log(`Project is listening at http://localhost:${port}`);
});
