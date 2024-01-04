require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/auth.js');
const contactRoutes = require('./routes/contact.js');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'your-secret-key', 
  resave: false,
  saveUninitialized: false
}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);
app.use('/contact', contactRoutes);
app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/contact', function(req, res) {
    // Send the HTML file containing the contact form
    res.sendFile(path.join(__dirname, '../frontend/contact.html'));
  });
app.post('/login', (req, res) => {

  req.session.loggedIn = true; 
  res.status(200).json({ message: 'Login successful' });
});


app.post('/logout', (req, res) => {
  req.session.loggedIn = false; 
  res.status(200).json({ message: 'Logout successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
