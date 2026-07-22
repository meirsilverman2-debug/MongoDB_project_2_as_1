import express from "express";
import {} from "../DAL/dal.atlas_dashboard.js";

// The leaderboard router:
const router = express.Router();

router.get("/global", async (req, res) => {
    console.log("endpoint: leaderboard/global");
    res.json("leaderboard/global")
});

router.get("/:game", async (req, res) => {
    console.log("endpoint: leaderboards/:game");
    return res.json("leaderboards/:game");
});

export default router;
