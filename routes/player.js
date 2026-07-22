import express from "express";

// The player router:
const router = express.Router();

router.get("/:name", async (req, res) => {
    console.log("endpoint: endpoint: player/:name");
    res.json("player/:name");
});

export default router;