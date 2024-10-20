import express from 'express';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import { fileURLToPath } from 'url'; // For ES module directory path handling
import uploadRoute from './routes/upload.js'; // Use import for the route

// Create express app
const app = express();

// Use the upload route for image uploads
app.use('/upload', uploadRoute);

// Set up port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});