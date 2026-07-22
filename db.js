console.log("step two: db.js");
import {MongoClient} from "mongodb";
import dotenv from "dotenv";

const res = dotenv.config();
console.log(res);


const MONGO_URL = process.env.MONGO_URL
console.log(process.env.MONGO_URL);


const client = new MongoClient(process.env.MONGO_URL);

try {
    await client.connect();
    console.log("mongoDB is connected");
    
} catch (error) {
    console.log("Failed to connect to mongoDB", error);
    process.exit(1);   
};


const db = await client.db("Score_Tracker")
console.log("db named Score_Tracker has been created");

export const table = await db.createCollection("Atlas_Dashboard");
console.log("table Atlas_dashboard has been created");

