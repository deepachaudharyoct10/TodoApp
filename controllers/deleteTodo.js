const Todo=require("../models/Todo")

exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message:"Todo Deleted",
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        console.log(505).json({
            success: false,
            message:"internal server problem",
        })
    }
}