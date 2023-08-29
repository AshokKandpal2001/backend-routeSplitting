import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {

};

export const login = async (req, res, next) => {

}


export const register = async (req, res) => {
    const { name, email, password } = req.body;    // Destructuring name , email , password
    let user = await User.findOne({ email });

    if (user) return res.status(404).json({          // if user is already registered, return
        success: false,
        message: "User already registered",
    });
    
    const hashedPassword = await bcrypt.hash(password, 10);    // hash password
    user = await User.create({                                         // create new user in database
        name, email, password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(201).
        cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000
        }).json({
            success: true,
            message: "User registered successfully"
        })
};

export const getUserDetailsById = async (req, res) => {

};
