import mongoose from "mongoose"
const connectDb =async (url)=>{
    try{
       await mongoose.connect(url)
       return 'connected'
    }
    catch(err){
        console.log('error')
       return 'error'
    }

}

export {connectDb}