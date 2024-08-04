/*
import express
initialise new router object in express 
imprt create todo and other controllers 
make a post or get type route accordingly  and map it with respective controller 
*/
const express = require('express');
const router = express.Router();
const { createTodo } = require('../controllers/createTodo');
// to import get controller
const { getTodo , getTodobyId } = require('../controllers/getTodo');
//import put controller
const { UpdateTodo } =require('../controllers/UpdateTodo');
const { deleteTodo} = require('../controllers/deleteTodo');
router.post("/createTodo", createTodo);
//to map getTodo controller with 
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodobyId);
router.delete("/deleteTodo/:id",deleteTodo);
//to map update controller with route
router.put("/updateTodo/:id", UpdateTodo);



module.exports = router;
