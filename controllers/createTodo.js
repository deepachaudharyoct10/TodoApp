const Todo = require("../models/Todo");

exports.createTodo = async(req,res) =>{
    try{
        const {title,description} = req.body;

        const response = await Todo.create({title,description});
        res.status(200).json(
            {
                success: true,
                data: response,
                message:'entry created succesfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        console.log(500)
        .json({
            success:false,
            data: " inter server error",
            message: err.message,
        })
    }
}