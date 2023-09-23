// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const certificateRoute = require('./routes/certificate'); // Import the certificate route

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/certificate-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use(express.json());

// Use the certificate route
app.use('/api/certificates', certificateRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
