console.log("step one: server.js");

import express from "express";
import dotenv from "dotenv/config";
import "./DAL/dal.atlas_dashboard.js";
import scoreRouter from "./routes/scores.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    console.log("/");
    res.send("Welcome to our special server");
});

app.use("/score", scoreRouter)





app.listen(PORT, (e) => {
    if (e) return console.log(e);
    console.log(`Server is running on http://localhost:${PORT}`);
});











