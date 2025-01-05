const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "../build")));

// API Routes
app.get("/api/announcements", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Community Meeting",
      date: "2024-04-01",
      content: "Monthly community meeting at Seoul Global Center",
    },
  ]);
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy" });
});

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Error handling for server startup
const startServer = async () => {
  try {
    await new Promise((resolve, reject) => {
      const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        resolve();
      });

      server.on("error", (error) => {
        if (error.code === "EADDRINUSE") {
          console.log(`Port ${port} is busy, trying ${port + 1}`);
          server.close();
          app.listen(port + 1);
        } else {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
