import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/:city', async (req, res, next) => {
    const city = req.params.city;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );
        res.json({ success: true, data: response.data });
    } catch (error) {
        next(error);
    }
});

export default router;
