import express from "express";
import { getUsers, getUserById, createUser, deleteUser, updateUser } from "../controllers/usersController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json("hello");
});

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;
