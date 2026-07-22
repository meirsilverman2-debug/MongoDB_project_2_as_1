import express from "express";

// The game router:
const router = express.Router();

router.get("/", async (req, res) => {
    console.log("endpoint: games/");
    res.json("games/")
});

export default router;