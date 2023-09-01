import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async(req , res , next) => {
    const { token } = req.cookies;              // take token from cookie (only if user is already logged in)

    if(!token){                                 // if user is not logged in then send message login first
        return res.status(404).json({
            success:false,
            message:"Login First",
        })
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET);  
    req.user = await User.findById(decoded._id);
    next();
}