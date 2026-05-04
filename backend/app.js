import express from 'express';
import { PORT } from './src/config/env.js';
import userRoutes from './src/routes/users.routes.js';
import hotelsRoutes from './src/routes/hotels.routes.js';
import connectDB from './src/config/db.js';
import errorMiddleware from './src/middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running ...')
})

connectDB();

app.use('/api/hotels', hotelsRoutes);

app.use('/api/auth', userRoutes);

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`server succesfully started on http://localhost:${PORT || 5500}/`)
})