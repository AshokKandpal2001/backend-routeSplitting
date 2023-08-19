import express from "express";
import {
  getAllUsers,
  getUserDetailsById,
  login,
  register,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login" , login)


router.route("/userid/:id").get(getUserDetailsById);

// router.get("/userid/:id", getUserDetailsById);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);

export default router;
