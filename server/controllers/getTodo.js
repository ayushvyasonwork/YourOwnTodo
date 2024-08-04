const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        // for fetching the data
        const todos=await Todo.find({})
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"data fetched successfully"
        })
    } catch (e) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server is not working"
        })
    }
};

exports.getTodobyId = async (req, res) => {
    try {
        const id =req.params.id;
        const todo=await Todo.findById({_id: id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found by this id "
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"id found"
        })
    } catch (e) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server is not working"
        })
    }
};

