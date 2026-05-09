import { Router } from "express";
import { createHotel, getHotel } from "../controllers/hotels.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { getHotels } from "../controllers/hotels.controllers.js";
import upload from "../middleware/upload.middleware.js";

const hotelsRoutes = Router();

hotelsRoutes.post('/', authMiddleware, upload.single('image'), createHotel);

hotelsRoutes.get('/', getHotels);

hotelsRoutes.get('/:id', getHotel)

export default hotelsRoutes