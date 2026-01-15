const express = require("express");
const todoRouter = express.Router();
const Todo = require("../models/todoItem.js")


todoRouter.post("/todo",async (req,res,next)=>{
    const {title,description,status,priority} = req.body;
    try {
        let newTodo =new Todo({title,description,status,priority});
        const todo = await newTodo.save();
        res.status(201).json({message:"susscefully created",todo})
    } catch(error){
        res.status(401).json({message:error.message})
    }
});
todoRouter.get("/todo",async(req,res,next)=>{
    try {
        const todos = await Todo.find({});
        res.status(200).json({message:"successfully retrive",todos})
    } catch(error){
        res.status(400).json({messsage:error.message})
    }
});
todoRouter.put("/todo/:id/edit",async (req,res,next)=>{
    const {id} = req.params
    const {title,description,status,priority} = req.body;
    try {
        let todo = await Todo.findByIdAndUpdate(id,{title,description,status,priority});
        res.status(200).json({message:"successfully updated",todo})
    } catch(error){
        res.status(400).json({message:error.message})
    }
});

todoRouter.delete("/todo/:id/delete",async(req,res,next)=>{
    let {id} = req.params;
    try{
    let todo = await Todo.findByIdAndDelete(id)
    res.status(200).json({message:"successfully delete"})
    } catch(error){
        res.status(400).json({message:error.mssage})
    }
})
module.exports = todoRouter;