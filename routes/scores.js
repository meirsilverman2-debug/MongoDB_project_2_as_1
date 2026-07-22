import express from "express";
import { create } from "../DAL/dal.atlas_dashboard.js";

// The scores router:
const router = express.Router();

// post a new score router:
router.post("/", async (req, res) => {
    console.log("endpoint: scores/");
    const data = req.body;
    const result = await create(data);
    console.log(req.body);
    
    res.status(201).json({success: true, data: req.body});
});

export default router;