const express = require('express');
const router = express.Router();
const axios = require('axios'); // if you're making HTTP requests

// Login route
router.post('/login', async (req, res) => {
  try {
    // Perform login logic (e.g., authenticate user, check credentials)
    // If successful, make a request to the server to set the login session
    await axios.post('http://localhost:3000/login');
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Logout route
router.post('/logout', async (req, res) => {
  try {
    // Perform logout logic
    // If successful, make a request to the server to clear the login session
    await axios.post('http://localhost:3000/logout');
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
