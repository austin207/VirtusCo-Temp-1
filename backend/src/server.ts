import express, { Request as ExpressRequest, Response as ExpressResponse, RequestHandler } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Create a PostgreSQL pool using the connection string from your .env file
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const subscribeHandler: RequestHandler = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ error: "Email is required" });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email address" });
      return;
    }

    // Insert email into the subscribers table
    const query = "INSERT INTO subscribers (email) VALUES ($1) RETURNING id";
    const result = await pool.query(query, [email]);

    res.status(200).json({
      message: "Subscription successful",
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

app.post("/api/subscribe", subscribeHandler);

// (Optional) Endpoint to list subscribers
app.get("/api/subscribers", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM subscribers");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Fetch subscribers error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
