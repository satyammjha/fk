import express from 'express';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    res.send('File uploaded successfully');
    const file = req.file;

   
    const formData = new FormData();
    formData.append('file', fs.createReadStream(path.join(__dirname, file.path)));

    const response = await axios.post('http://localhost:5000/predict', formData, {
      headers: formData.getHeaders(),
    });

    // Clean up the file after forwarding it
    fs.unlinkSync(path.join(__dirname, file.path));

    // Send the result back to the frontend
    res.json({ product_name: response.data.product_name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

export default router;