import express from 'express';
import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import uploadRoute from './routes/upload.js';
import weatherRoute from './routes/weather.js';
import errorHandler from './middleware/errorHandler.js';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/uploads', express.static(join(__dirname, 'uploads')));
app.use('/upload', uploadRoute);
app.use('/weather', weatherRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the Enhanced Node.js App!');
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
