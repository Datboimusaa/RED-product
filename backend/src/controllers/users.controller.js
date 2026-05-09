import usersModel from "../models/users.models.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import bcrypt from "bcryptjs";
import { sendEmail } from "../services/email.service.js";
import crypto from "crypto";

export const Register = async function (req, res, next) {
  try {
    const { name, email, password } = req.body;

    const userExists = await usersModel.findOne({ email });

    if (userExists) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    const verificationTokenRaw = crypto.randomBytes(32).toString("hex");

    const verificationToken = crypto
      .createHash("sha256")
      .update(verificationTokenRaw)
      .digest("hex");

    const newUser = await usersModel.create({
      name,
      email,
      password,
      verificationToken,
      verificationTokenExpires: Date.now() + 60 * 60 * 1000,
    });

    const verificationLink = `https://red-product-blue.vercel.app/verify-email?token=${verificationTokenRaw}`;

    await sendEmail({
      to: newUser.email,
      subject: "Email Verification for Red Product",
      html: `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                </head>
                <body>
                  <div>
                    <h1>Red Product email verification</h1>
                    <p>Please click the link below to verify your email address:</p>
                    <a href="${verificationLink}">Verify Email</a>
                  </div>
                </body>
              </html>`,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const VerifyEmail = async function (req, res, next) {
  try {
    const { token } = req.query;

    if (!token) {
      const error = new Error("Token is required");
      error.statusCode = 400;
      throw error;
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await usersModel.findOne({
      verificationToken: hashedToken,
      verificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      const error = new Error("Invalid or expired token");
      error.statusCode = 400;
      throw error;
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "email verified successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const Login = async function (req, res, next) {
  try {
    const { email, password } = req.body;

    const userExists = await usersModel.findOne({ email }).select('+password');

    if (!userExists) {
      const error = new Error("invalid email or password");
      error.statusCode = 400;
      throw error;
    }

    const matchingPassword = await bcrypt.compare(
      password,
      userExists.password,
    );

    if (!matchingPassword) {
      const error = new Error("Invalid email or password");
      error.statusCode = 400;
      throw error;
    }

    if (!userExists.isVerified) {
      const error = new Error("Email verfication needed");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userID: userExists._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: "login succesful",
      data: {
        user: {
          id: userExists._id,
          name: userExists.name,
          email: userExists.email,
        },
        token
      },
    });
  } catch (error) {
    next(error);
  }
};

export const ForgotPassword = async function (req, res, next) {
  try {
    const { email } = req.body;

    const user = await usersModel.findOne({ email });

    if (!user) {
      return res.status(200).json({
        success: true,
        message: "If email exists, reset link sent",
      });
    }

    const rawToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(rawToken)
      .digest("hex");

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetLink = `https://red-product-blue.vercel.app/reset-password?token=${rawToken}`;

    await sendEmail({
      to: user.email,
      subject: "RED product password recovery",
      html: `<div>
              <p> Click on the link below to reset your password </p> 
              <a href="${resetLink}">Reset Password</a>
            </div>`,
    });

    res.status(200).json({
      success: true,
      message: "Reset email link sent",
    });
  } catch (error) {
    next(error);
  }
};

export const ResetPassword = async function (req, res, next) {
  try {
    const { token, newPassword } = req.body;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await usersModel.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    }).select('+password');

    if (!user) {
      const error = new Error("Invalid or expired token");
      error.statusCode = 400;
      throw error;
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    next(error);
  }
};
