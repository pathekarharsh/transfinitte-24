const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    try {
        res.json({ message: 'Backend is running!', status: 'success' });
    } catch (error) {
        console.error('Error in route:', error);
        res.status(500).json({ message: 'Internal server error', status: 'error' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
