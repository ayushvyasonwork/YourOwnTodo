const Todo=require('../models/Todo');

exports.UpdateTodo=async (req,res)=>{
        try{
            const {id}=req.params;
            const {title,description}=req.body;
            const todo=await Todo.findByIdAndUpdate(
                {_id:id},
                {title,description,UpdatedAt:Date.now()}
            )
            if(!todo){
                return res.status(404).json({
                    success:false,
                    message:"no data found by this id "
                })
            }
            res.status(200).json({
                success:true,
                data:todo,
                message:"data updated "
            })
        }
        catch(err){
                //response
                console.error(err);
                res.status(500)
                .json({
                    success:false,
                    error:err.message,
                    message:"server error"
                })
        }
}