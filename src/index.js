/**
 * @file index.js
 */

const path = require("path");
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const multer = require("multer")();

// Get path to public and pages directories.
const sourceDirectory = path.join(process.cwd(), "src");
const publicDirectory = path.join(sourceDirectory, "public");
const pagesDirectory = path.join(sourceDirectory, "pages");

// Initialize application
const app = express();

// Initialize server middleware
app.use("/public", express.static(publicDirectory));
app.use(cors());
app.use(compression());

// Serve index page
app.get("/", (_, res) =>
  res.status(200).sendFile(path.join(pagesDirectory, "index.html"))
);

// POST /
//
// Returns some information on the uploaded file.
app.post("/api/fileanalyse", multer.single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file;

  return res.status(200).json({
    name: originalname,
    type: mimetype,
    size,
  });
});

// Listen for connections
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port #${port}. . .`));
