console.log("step one: server.js");

import express from "express";
import dotenv from "dotenv/config";
import "./DAL/dal.atlas_dashboard.js";

// All of the five routes of the system:
import gamesRouter from "./routes/game.js";
import leaderboardRouter from "./routes/leaderboard.js";
import scoreRouter from "./routes/scores.js";
import playerRouter from "./routes/player.js";
import statsRouter from "./routes/stats.js";



const app = express();

const PORT = process.env.PORT;

// The basic router in the server that greets everyone:
app.use(express.json());

app.get("/", (req, res) => {
    console.log("/");
    res.send("Welcome to our special server");
});


// All of the five prefix each router:
app.use("/games", gamesRouter);
app.use("/leaderboard", leaderboardRouter);
app.use("/player", playerRouter);
app.use("/score", scoreRouter);
app.use("/stats", statsRouter);


app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`Server is running on http://localhost:${PORT}`);
});











