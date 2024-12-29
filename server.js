// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;  // Backend will run on port 5000

// Middleware
app.use(cors());  // Allow frontend to access the backend
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost/newsApp')
// .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define the News schema and model
const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const News = mongoose.model('News', newsSchema);

// Get list of news articles
app.get('/api/news', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).send('Error fetching news');
  }
});

// Get a single news article by ID
// backend/server.js
app.get('/api/news/:id', async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    if (!article) {
      return res.status(404).send('Article not found');
    }
    res.json(article);
  } catch (error) {
    console.error(error); // Log the error to see what's happening
    res.status(500).send('Error fetching article');
  }
});


// Start the server
app.listen(port, () => {
  console.log(req.params.id);  // Log the ID received from the frontend
});
