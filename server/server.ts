import cors from "cors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { ConnectMongoDb, getCachedDb } from "./mongodb";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import formRoute from "./routes/forms";

// Connect to MongoDB
ConnectMongoDb();

const app = express();
const port = 5000; // Specify your desired port number here

// Middleware
app.use(cors());
app.use(express.json({limit:"50mb"})); // Parse request bodies as JSON
app.use(express.urlencoded({ extended: true,limit:"50mb" })); // Parse request bodies as URL encoded data

// Routes
app.use("/api/auth", authRoute); // Authentication routes
app.use("/api/users", userRoute); // User routes
app.use("/api/forms", formRoute); // Form routes

// Default route
app.get("/", (req, res) => {
  const cachedDb = getCachedDb();
  if (cachedDb) {
    res.status(200).json({ message: "Default connection API is working" });
  } else {
    res.status(500).json({ error: "Default connection API is not available" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
