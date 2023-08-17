import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserDetailsById,
  register,
  specialFunction,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.get("/userid/special", specialFunction);

router.route("/userid/:id").get(getUserDetailsById).put(updateUser).delete(deleteUser);

// router.get("/userid/:id", getUserDetailsById);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deleteUser);

export default router;
