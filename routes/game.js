import express from "express";

// The game router:
const router = express.Router();

router.get("/", (req, res) => {
    console.log("games/");
    res.json("games/")
});

export default router;