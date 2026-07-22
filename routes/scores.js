import express from "express";
import { create } from "../DAL/dal.atlas_dashboard.js";

const router = express.Router();

// post a new score router:
router.post("/", (req, res) => {
    const data = req.body;
    const result = create(data);
    console.log(result);
    
    res.status(201).json({success: true, data: result});
});



export default router;