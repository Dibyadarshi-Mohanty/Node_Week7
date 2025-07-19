import express, { json } from 'express';
import { config } from 'dotenv';
import authRoutes from './routes/auth';

config();

const app = express();
app.use(json());

app.use('/api/auth', authRoutes);

// Protected Route Example
import verifyToken from './middleware/auth';
app.get('/api/protected', verifyToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.email}, this is a protected route!` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
