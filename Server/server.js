import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/User.js'; 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Use CORS
app.use(cors());

// Middleware to parse JSON with a limit
app.use(express.json({ limit: '10mb' }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Route to create a new user
app.post('/users', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    const newUser = new User({ username, password });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        // Check for duplicate username error
        if (error.code === 11000) { // MongoDB duplicate key error code
            return res.status(409).json({ message: 'Username already exists.',code:-2 });
        }
        // Handle other potential errors
        res.status(400).json({ message: error.message });
    }
});

// Route to login a user
app.post('/loginUser', async (req, res) => {
    const { username, proof } = req.body;

    // Validate input
    if (!username || !proof) {
        return res.status(400).json({ message: 'Username and proof are required.' });
    }

    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found.', code: -1 });
        }
        res.status(200).json(user.password);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
