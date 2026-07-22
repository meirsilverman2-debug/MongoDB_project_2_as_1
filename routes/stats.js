import express from "express";

// The stats router
const router = express.Router();

router.get("/", async (req, res) => {
    console.log("endpoint: stats/");
    res.json("stats/");
});

export default router;