import { config } from "dotenv";

config({ path: `./.env` });

export const {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  BREVO_API_KEY
} = process.env;
