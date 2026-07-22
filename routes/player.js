import express from "express";

// The player router:
const router = express.Router();

router.get("/:name", (req, res) => {
    console.log("player/:name");
    res.json("player/:name");
});

export default router;