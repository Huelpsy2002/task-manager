import { Task } from "../models/model.js"
const home = (req,res)=>{
    res.render('index.ejs')

}
const editTaskPage  = (req,res)=>{
    res.render('task.ejs')
}

const getAllTasks = async(req,res)=>{
    try{  
        const tasks = await Task.find({})
        res.status(200).json({tasks})
       
    }
    catch(err){
        res.status(404).json({"msg":err})
    }
   
}

const getTask = async(req,res)=>{
    const id = req.params.id
    try{  
     const task = await Task.findById(id)
     if(!task){
        return res.status(404).json({msg:`no task with id:${id}`})
     }
     res.status(200).json({task})
     }
     catch(err){
       
         res.status(500).json({"msg":err})
     }
 }


const createTask =async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(err){
        res.status(500).json({'msg':err})
    }
}





const updateTask =async (req,res)=>{
    const id = req.params.id
    
    try{
        const task = await Task.findOneAndUpdate({_id:id},req.body,{
            new:true,
            runValidators:true
        });
        if(!task){
            return res.status(404).json({msg:`no task with id:${id}`})}
        res.status(200).json({msg:'task was updated',task:task})


    }
    catch(err){
        res.status(500).json({"msg":err})
    }


}


const deleteTask =async (req,res)=>{
    const id = req.params.id
    try{  
     const task = await Task.findByIdAndDelete(id)
     if(!task){
        return res.status(404).json({msg:`no task with id:${id}`})
     }
     res.status(200).json({msg:'task was deleted'})
     }
     catch(err){
         res.status(500).json({"msg":err})
     }

}


export {home,getAllTasks,createTask,getTask,updateTask,deleteTask,editTaskPage}