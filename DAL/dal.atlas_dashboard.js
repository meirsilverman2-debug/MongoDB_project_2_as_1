console.log("step three: dal.atlas_dashboard.js");
import { table} from "../db.js";
import { ObjectId } from "mongodb";

// The basic CRUD DAL functions:

// POST create:
export async function create(newData){
    try {
       console.log("create");
       newData.createdAT = new Date();
       return await table.insertOne(newData);
    } catch (error) {
        console.log("ERROR:");
        console.log(error); 
    };
};

// GET all:
export async function getAll(){
    try {
        console.log("getAll");
        return await table.find().toArray();
    } catch (error) {
    console.log(error);
    };
};

// GET by ID:
export async function getByID(id){
    try {
        console.log("getByID");
        return await table.findOne({_id: new ObjectId(id)});
    } catch (error) {
        console.log("ERROR:");
        console.log(error);
    };
};

// DELETE by ID:
export async function deleteByID(id){
    try {
        console.log("deleteByID");
        return await table.deleteOne({_id: new ObjectId(id)});
    } catch (error) {
        console.log("ERROR:");
        console.log(error);
    };
};

// PATCH meaning updating somthing but not all:
export async function updatingByID(id, newData){
    try {
        console.log("updatingByID");
        return await table.findOneAndUpdate({_id: new ObjectId(id)}, {$set: newData}, {returnDocument: "after"});
    } catch (error) {
        console.log("ERROR:");
        console.log(error);
    };
};









