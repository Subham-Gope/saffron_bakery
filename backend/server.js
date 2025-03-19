import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import emailRouter from "./routes/emailRoutes.js";

// Loading enviroment variables
dotenv.config();

const PORT = process.env.PORT;

// Initializes an express app
const app = express();

// Parses JSON body from req
app.use(express.json());

// // Parses URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

// Enables Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Use Helmet to automatically set security headers (like CSP and X-Frame-Options)  that protects the app from common threats such as XSS and clickjacking
app.use(helmet());

// Mounting the emailRouter with the /api path
app.use("/api", emailRouter);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
