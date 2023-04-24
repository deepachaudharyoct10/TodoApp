const Todo = require("../models/Todo");
exports.getTodo = async(req,res) =>{
    try{
       const todos  = await Todo.find({});

       res.status(200).json({
        success:true,
    data:todos,
    message:"entire todo Data is Fetch",
       });
    }


    catch(err){
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success: false,
        data:"internal server error",
        message:err.message,
    });
    }
}


exports.getTodoById = async(req,res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})
        if(!todo){
            return res.status(404).json({
                success:false,
                message: " NO data is found",
            })
        }

        res.status(200).json({
            success: true,
            res: todo,
            message:`Todo ${id} data succesfully fectched`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(505).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}