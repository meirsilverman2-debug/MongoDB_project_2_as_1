import express from "express";
import { create } from "../DAL/dal.atlas_dashboard.js";

// The scores router:
const router = express.Router();

// post a new score router:
router.post("/", (req, res) => {
    console.log("scores/");
    const data = req.body;
    const result = create(data);
    console.log(result);
    
    res.status(201).json({success: true, data: result});
});

export default router;