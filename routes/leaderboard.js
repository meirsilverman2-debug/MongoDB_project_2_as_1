import express from "express";
import {} from "../DAL/dal.atlas_dashboard.js";

// The leaderboard router:
const router = express.Router();

router.get("/global", (req, res) => {
    console.log("leaderboard/global");
    res.json("leaderboard/global")
});

router.get("/:game", (req, res) => {
    console.log("leaderboards/:game");
    return res.json("leaderboards/:game");
});

export default router;
