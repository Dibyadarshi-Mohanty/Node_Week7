import { Router } from 'express';
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import { hash, compare } from 'bcryptjs';
const router = Router();

const users = []; 

router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const userExists = users.find(user => user.email === email);
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await hash(password, 10);
    const newUser = { email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = ({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

export default router;
