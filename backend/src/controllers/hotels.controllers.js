import hotelsModel from "../models/hotels.models.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export async function createHotel(req, res, next) {
  try {
    const { name, address, email, number, pricePerNight, currency } = req.body;

    if (!name || !address || !email || !number || !pricePerNight || !currency) {
      const error = new Error("Please provide all the inputs");
      error.statusCode = 400;
      throw error;
    }

    if (!req.file) {
      const error = new Error("Image is required");
      error.statusCode = 400;
      throw error;
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "red_products_images",
    });

    fs.unlinkSync(req.file.path);

    const imageURL = result.secure_url;

    const newHotel = await hotelsModel.create({
      name,
      address,
      email,
      number,
      pricePerNight,
      currency,
      image: imageURL,
      user: req.user.userID,
    });

    res.status(201).json({
      success: true,
      message: "hotel created successfully",
      data: {
        hotel: newHotel,
      }
    });
  } catch (error) {
    next(error);
  }
}

export async function getHotels(req, res, next) {
  try {
    const hotels = await hotelsModel.find();

    res.status(200).json({
      success: true,
      results: hotels.length,
      data: {
        hotels,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function getHotel(req, res, next) {
  try {
    const { id } = req.params;

    const hotel = await hotelsModel.findOne({
      _id: id,
    });

    if (!hotel) {
      const error = new Error("Hotel not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: { hotel },
    });
  } catch (error) {
    next(error);
  }
}
