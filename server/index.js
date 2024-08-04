// take the instance of the express from the module 
// make the app by calling express server 
// import dotenv with its config method 
// declare the port no and default port if that was not available 
// add middleware for parsing json data 
// declare the route and use api/v1 for any changes related to version 
// instantioate the server on the port 
// connect the db by importing the database file 
// then for testing the route send a sentence of server starting as a html response on the route 
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const todoRoutes = require("./routes/todoRoute");
app.use('/api/v1', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
// db connect 
const dbConnect = require("./config/database");
dbConnect();
// default route 
app.get("/", (req, res) => {
    res.send(`<h1>This is the default route</h1>`);
});
