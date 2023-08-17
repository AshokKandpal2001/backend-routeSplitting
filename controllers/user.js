import { User } from "../models/user.js";
export const getAllUsers = async (req , res) => {
    const users = await User.find();
    res.json({
        success: true,
        users,
    });
};

export const register = async (req, res) => {

    const { name , email , password } = req.body;
    await User.create({
        name,
        email,
        password,
    });
    res.status(201).cookie("token" , "first-cookie").json({
    success: true,
    message: "User created successfully",
  });
}

export const specialFunction =  (req , res) => {
    res.json({
        success: true,
        message: "Just Trying something new to learn",
    });
};


export const getUserDetailsById = async (req , res) => {
    const { id } = req.params;
    const user = await User.findById(id);;
    res.json({
        success: true,
        user,
    });
}

export const updateUser = async (req , res) => {
    const { id } = req.params;
    const user = await User.findById(id);;
    res.json({
        success: true,
        message: "User Updated successfully",
    });
}

export const deleteUser = async (req , res) => {
    const { id } = req.params;
    const user = await User.findById(id);;
    res.json({
        success: true,
        message : "User deleted successfully",
    });
}